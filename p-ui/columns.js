function actionColumn(str) {
    return {
        name: "action",
        text: $trans("Actions"),
        headStyle: { width: 20, textAlign: "center" },
        bodyStyle: { width: 20, textAlign: "center" },
        bodyRender: (row) => `<action-menu target="${row.id}"${str}></action-menu>`,
        headPdfStyle: function() {
            return this.headStyle;
        },
        bodyPdfStyle: function() {
            return this.bodyStyle;
        },
        bodyPdfRender: () => empty(),
        bodyCsvRender: () => empty(),
    };
}

function userColumns({ csrf, scene, patch, print, clear, cols } = {}) {
    const str = `${csrf ? `csrf="${csrf}"` : ""}${scene ? `scene="${scene}"` : ""}${patch ? `patch="${patch}"` : ""}${print ? `print="${print}"` : ""}${clear ? `clear="${clear}"` : ""
        }`;
    const arr = [];
    (!cols || cols.includes("full_name")) &&
        arr.push({
            name: "full_name",
            text: $trans("Full name"),
            bodyRender: (row) => row.last_name.toUpperCase() + " " + $capitalize(row.first_name),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("email")) &&
        arr.push({
            name: "email",
            text: $trans("Email"),
        });
    (!cols || cols.includes("phone")) &&
        arr.push({
            name: "phone",
            text: $trans("Phone"),
        });
    (!cols || cols.includes("birth_date")) &&
        arr.push({
            visible: false,
            name: "birth_date",
            text: $trans("Birth date"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyRender: (row) => (row.birth_date ? $moment(row.birth_date, $core.format) : empty()),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("gender")) &&
        arr.push({
            visible: false,
            name: "gender",
            text: $trans("Gender"),
            headStyle: {width: 20, textAlign: "center"},
            bodyStyle: {width: 20, textAlign: "center"},
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyRender: (row) => (row.gender ? $capitalize($trans(row.gender)) : empty()),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("address")) &&
        arr.push({
            visible: false,
            name: "address",
            text: $trans("Address"),
            bodyRender: (row) => (row.address ? $capitalize(row.address) : empty()),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) && arr.push(actionColumn(str));

    return arr;
}

function reservationColumns ({csrf, scene, patch, print, clear, cols} = {}) {
    const str = `${csrf ? `csrf="${csrf}"` : ""}${scene ? `scene="${scene}"` : ""}${patch ? `patch="${patch}"` : ""}${print ? `print="${print}"` : ""}${clear ? `clear="${clear}"` : ""
        }`;
    const arr = [];
    (!cols || cols.includes("reference")) &&
        arr.push({
            name: "reference",
            text: $trans("Reference"),
            headStyle: {textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            headPdfStyle: function () {
                return this.headStyle;
            },
        });
    (!cols || cols.includes("vehicle")) &&
        arr.push({
            name: "vehicle",
            text: $trans("Vehicle"),
            bodyStyle: function (row) {
                return bgdate(row);
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) =>
                row.vehicle
                    ? $capitalize($trans(row.vehicle.brand)) +
                    " " +
                    $capitalize($trans(row.vehicle.model)) +
                    " " +
                    row.vehicle.year +
                    " (" +
                    row.vehicle.registration_number +
                    ")"
                    : empty(),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("renter")) &&
        arr.push({
            name: "renter",
            text: $trans("Renter"),
            bodyStyle: function (row) {
                return bgdate(row);
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => {
                if(row.agency) return `<div>${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}</div>`;
                if(row.client)
                    return (
                        `<div>${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}</div>` +
                        (row.sclient
                            ? `<div>${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }</div>`
                            : "")
                    );
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: (row) => {
                if(row.agency) return `${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}`;
                if(row.client)
                    return (
                        `${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}` +
                        (row.sclient
                            ? `, ${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }`
                            : "")
                    );
            },
        });
    (!cols || cols.includes("pickup")) &&
        arr.push({
            name: "pickup",
            text: $trans("Pickup"),
            bodyStyle: function (row) {
                return bgdate(row);
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) =>
                row.pickup_location
                    ? `<div>${$capitalize($trans("Date"))}: ${$moment(row.pickup_date, $core.format + " hh:MM A")}</div><div>${$capitalize(
                        $trans("Location")
                    )}: ${$capitalize(row.pickup_location)}</div>`
                    : $moment(row.pickup_date, $core.format + " hh:MM A"),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: (row) =>
                row.pickup_location
                    ? `${$capitalize($trans("Date"))}: ${$moment(row.pickup_date, $core.format + " hh:MM A")}, ${$capitalize(
                        $trans("Location")
                    )}: ${$capitalize(row.pickup_location)}`
                    : $moment(row.pickup_date, $core.format + " hh:MM A"),
        });
    (!cols || cols.includes("dropoff")) &&
        arr.push({
            visible: false,
            name: "dropoff",
            text: $trans("Dropoff"),
            bodyStyle: function (row) {
                return bgdate(row);
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) =>
                row.dropoff_location
                    ? `<div>${$capitalize($trans("Date"))}: ${$moment(row.dropoff_date, $core.format + " hh:MM A")}</div><div>${$capitalize(
                        $trans("Location")
                    )}: ${$capitalize(row.dropoff_location)}</div>`
                    : $moment(row.dropoff_date, $core.format + " hh:MM A"),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: (row) =>
                row.dropoff_location
                    ? `${$capitalize($trans("Date"))}: ${$moment(row.dropoff_date, $core.format + " hh:MM A")}, ${$capitalize(
                        $trans("Location")
                    )}: ${$capitalize(row.dropoff_location)}`
                    : $moment(row.dropoff_date, $core.format + " hh:MM A"),
        });
    (!cols || cols.includes("rental_period_days")) &&
        arr.push({
            name: "rental_period_days",
            text: $trans("Rental period"),
            headStyle: {textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => row.rental_period_days + " " + $trans("Days"),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("mileage")) &&
        arr.push({
            visible: false,
            name: "mileage",
            text: $trans("Mileage"),
            headStyle: {textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => row.mileage + " " + $trans("Km"),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("fuel_level")) &&
        arr.push({
            visible: false,
            name: "fuel_level",
            text: $trans("Fuel level"),
            headStyle: {textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => $money(+row.fuel_level, 2) + " %",
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("status")) &&
        arr.push({
            name: "status",
            text: $trans("Status"),
            headStyle: {textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => $capitalize($trans(row.status)),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) && arr.push(actionColumn(str));

    return arr;
}

function paymentColumns ({csrf, scene, patch, print, clear, cols} = {}) {
    const str = `${csrf ? `csrf="${csrf}"` : ""}${scene ? `scene="${scene}"` : ""}${patch ? `patch="${patch}"` : ""}${print ? `print="${print}"` : ""}${clear ? `clear="${clear}"` : ""
        }`;
    const arr = [];
    (!cols || cols.includes("reference")) &&
        arr.push({
            name: "reference",
            text: $trans("Reference"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyRender: (row) => row.reservation.reference,
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("vehicle")) &&
        arr.push({
            name: "vehicle",
            text: $trans("Vehicle"),
            bodyRender: (row) =>
                row.vehicle
                    ? $capitalize($trans(row.vehicle.brand)) +
                    " " +
                    $capitalize($trans(row.vehicle.model)) +
                    " " +
                    row.vehicle.year +
                    " (" +
                    row.vehicle.registration_number +
                    ")"
                    : empty(),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("renter")) &&
        arr.push({
            name: "renter",
            text: $trans("Renter"),
            bodyRender: (row) => {
                if(row.agency) return `<div>${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}</div>`;
                if(row.client)
                    return (
                        `<div>${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}</div>` +
                        (row.sclient
                            ? `<div>${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }</div>`
                            : "")
                    );
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: (row) => {
                if(row.agency) return `${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}`;
                if(row.client)
                    return (
                        `${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}` +
                        (row.sclient
                            ? `, ${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }`
                            : "")
                    );
            },
        });
    (!cols || cols.includes("daily_rate")) &&
        arr.push({
            name: "daily_rate",
            text: $trans("Daily rate"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.daily_rate, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("total")) &&
        arr.push({
            name: "total",
            text: $trans("Total"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.total, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("paid")) &&
        arr.push({
            name: "paid",
            text: $trans("Payment"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.paid, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("rest")) &&
        arr.push({
            name: "rest",
            text: $trans("Creance"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.rest, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("status")) &&
        arr.push({
            name: "status",
            text: $trans("Status"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $capitalize($trans(row.status)),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) && arr.push(actionColumn(str));

    return arr;
}

function recoveryColumns ({csrf, scene, patch, print, clear, cols} = {}) {
    const str = `${csrf ? `csrf="${csrf}"` : ""}${scene ? `scene="${scene}"` : ""}${patch ? `patch="${patch}"` : ""}${print ? `print="${print}"` : ""}${clear ? `clear="${clear}"` : ""
        }`;
    const arr = [];
    (!cols || cols.includes("reference")) &&
        arr.push({
            name: "reference",
            text: $trans("Reference"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyRender: (row) => row.reservation.reference,
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("vehicle")) &&
        arr.push({
            name: "vehicle",
            text: $trans("Vehicle"),
            bodyRender: (row) =>
                row.vehicle
                    ? $capitalize($trans(row.vehicle.brand)) +
                    " " +
                    $capitalize($trans(row.vehicle.model)) +
                    " " +
                    row.vehicle.year +
                    " (" +
                    row.vehicle.registration_number +
                    ")"
                    : empty(),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("renter")) &&
        arr.push({
            name: "renter",
            text: $trans("Renter"),
            bodyRender: (row) => {
                if(row.agency) return `<div>${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}</div>`;
                if(row.client)
                    return (
                        `<div>${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}</div>` +
                        (row.sclient
                            ? `<div>${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }</div>`
                            : "")
                    );
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: (row) => {
                if(row.agency) return `${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}`;
                if(row.client)
                    return (
                        `${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}` +
                        (row.sclient
                            ? `, ${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)
                            }`
                            : "")
                    );
            },
        });
    (!cols || cols.includes("mileage")) &&
        arr.push({
            name: "mileage",
            text: $trans("Mileage"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => row.mileage + " " + $trans("Km"),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("fuel_level")) &&
        arr.push({
            name: "fuel_level",
            text: $trans("Fuel level"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.fuel_level, 2) + " %",
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("penalties")) &&
        arr.push({
            name: "penalties",
            text: $trans("Penalties"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+JSON.parse(row.penalties).reduce((a, e) => a + e.cost, 0), 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("status")) &&
        arr.push({
            name: "status",
            text: $trans("Status"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $capitalize($trans(row.status)),
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) && arr.push(actionColumn(str));

    return arr;
}

function chargeColumns ({csrf, scene, patch, print, clear, cols} = {}) {
    const str = `${csrf ? `csrf="${csrf}"` : ""}${scene ? `scene="${scene}"` : ""}${patch ? `patch="${patch}"` : ""}${print ? `print="${print}"` : ""}${clear ? `clear="${clear}"` : ""
        }`;
    const arr = [];
    (!cols || cols.includes("vehicle")) &&
        arr.push({
            name: "vehicle",
            text: $trans("Vehicle"),
            bodyRender: (row) =>
                row.vehicle
                    ? $capitalize($trans(row.vehicle.brand)) +
                    " " +
                    $capitalize($trans(row.vehicle.model)) +
                    " " +
                    row.vehicle.year +
                    " (" +
                    row.vehicle.registration_number +
                    ")"
                    : empty(),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("name")) &&
        arr.push({
            name: "name",
            text: $trans("Name"),
            bodyRender: (row) => $capitalize(row.name),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("cost")) &&
        arr.push({
            name: "cost",
            text: $trans("Cost"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.cost, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("details")) &&
        arr.push({
            name: "details",
            text: $trans("Details"),
            headStyle: {
                maxWidth: 300,
            },
            bodyStyle: function () {
                return this.headStyle;
            },
            bodyRender: (row) => (row.details ? row.details : empty()),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) && arr.push(actionColumn(str));

    return arr;
}