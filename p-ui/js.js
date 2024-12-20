(function() {
    const html = /*html*/ `<neo-dropdown ref="dropdown" label="{{ @trans('Actions') }}" position="{{ @state.rtl ? 'start' : 'end' }}"><button slot="trigger" ref="btn" part="menu-button"><svg part="menu-button-icon" viewBox="0 -960 960 960"><path d="M480.34-95Q438-95 409-124.42t-29-70.74q0-42.14 29.07-71.99Q438.13-297 479.66-297 522-297 551-267.26t29 71.5q0 41.76-29.02 71.26Q521.97-95 480.34-95Zm0-285Q438-380 409-409.07q-29-29.06-29-70.59Q380-522 409.07-551q29.06-29 70.59-29Q522-580 551-550.98q29 29.01 29 70.64Q580-438 550.98-409q-29.01 29-70.64 29Zm0-283Q438-663 409-692.95q-29-29.94-29-72Q380-807 409.07-836q29.06-29 70.59-29Q522-865 551-835.98q29 29.01 29 70.86 0 42.25-29.02 72.19Q521.97-663 480.34-663Z"/></svg></button><ul part="menu-list">{$ if @props.scene $}<li part="menu-list-item"><a href="{{ @props.scene.replace('XXX', @props.target) }}" part="menu-list-link"><svg part="menu-list-icon" viewBox="0 -960 960 960"><path d="M99-272q-19.325 0-32.662-13.337Q53-298.675 53-318v-319q0-20.3 13.338-33.15Q79.675-683 99-683h73q18.9 0 31.95 12.85T217-637v319q0 19.325-13.05 32.663Q190.9-272 172-272H99Zm224 96q-20.3 0-33.15-13.05Q277-202.1 277-221v-513q0-19.325 12.85-32.662Q302.7-780 323-780h314q20.3 0 33.15 13.338Q683-753.325 683-734v513q0 18.9-12.85 31.95T637-176H323Zm465-96q-18.9 0-31.95-13.337Q743-298.675 743-318v-319q0-20.3 13.05-33.15Q769.1-683 788-683h73q19.325 0 33.162 12.85Q908-657.3 908-637v319q0 19.325-13.838 32.663Q880.325-272 861-272h-73Z" /></svg>{{ @trans("View") }}</a></li>{$ endif $}{$ if @props.print $}<li part="menu-list-item"><a href="{{ @props.print.replace('XXX', @props.target) }}" part="menu-list-link"><svg part="menu-list-icon" viewBox="0 -960 960 960"><path d="M741-701H220v-160h521v160Zm-17 236q18 0 29.5-10.812Q765-486.625 765-504.5q0-17.5-11.375-29.5T724.5-546q-18.5 0-29.5 12.062-11 12.063-11 28.938 0 18 11 29t29 11Zm-75 292v-139H311v139h338Zm92 86H220v-193H60v-264q0-53.65 36.417-91.325Q132.833-673 186-673h588q54.25 0 90.625 37.675T901-544v264H741v193Z"/></svg>{{ @trans("Print") }}</a></li>{$ endif $}{$ if @props.patch $}<li part="menu-list-item"><a href="{{ @props.patch.replace('XXX', @props.target) }}" part="menu-list-link"><svg part="menu-list-icon" viewBox="0 -960 960 960"><path d="M170-103q-32 7-53-14.5T103-170l39-188 216 216-188 39Zm235-78L181-405l435-435q27-27 64.5-27t63.5 27l96 96q27 26 27 63.5T840-616L405-181Z"/></svg>{{ @trans("Edit") }}</a></li>{$ endif $}{$ if @props.clear && @props.csrf $}<li part="menu-list-item"><form action="{{ @props.clear.replace('XXX', @props.target) }}" method="POST"><input type="hidden" name="_token" value="{{ @props.csrf }}" autocomplete="off" /><input type="hidden" name="_method" value="delete" /><button part="menu-list-link"><svg part="menu-list-icon" viewBox="0 -960 960 960"><path d="M253-99q-36.462 0-64.231-26.775Q161-152.55 161-190v-552h-11q-18.75 0-31.375-12.86Q106-767.719 106-787.36 106-807 118.613-820q12.612-13 31.387-13h182q0-20 13.125-33.5T378-880h204q19.625 0 33.312 13.75Q629-852.5 629-833h179.921q20.279 0 33.179 13.375 12.9 13.376 12.9 32.116 0 20.141-12.9 32.825Q829.2-742 809-742h-11v552q0 37.45-27.069 64.225Q743.863-99 706-99H253Zm104-205q0 14.1 11.051 25.05 11.051 10.95 25.3 10.95t25.949-10.95Q431-289.9 431-304v-324q0-14.525-11.843-26.262Q407.313-666 392.632-666q-14.257 0-24.944 11.738Q357-642.525 357-628v324Zm173 0q0 14.1 11.551 25.05 11.551 10.95 25.8 10.95t25.949-10.95Q605-289.9 605-304v-324q0-14.525-11.545-26.262Q581.91-666 566.93-666q-14.555 0-25.742 11.738Q530-642.525 530-628v324Z"/></svg> {{ @trans("Delete") }}</button></form></li>{$ endif $}</ul></neo-dropdown>`;

    const css = /*css */ `*{box-sizing:border-box;font-family:inherit;}:host{position:absolute;top:0;left:0;}[part="menu-button"]{width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:.25rem;border:unset;background-color:transparent;}[part="menu-list"]{list-style:none;display:flex;flex-direction:column;margin:0;padding:0;}[part="menu-list-link"]{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;padding:0.5rem 0.75rem;font-size:1rem;font-weight:500;color:{{ @Theme.colors("BLACK") }};background:transparent;border:unset;text-decoration:solid;width:100%;}[part="menu-button"]:hover,[part="menu-button"]:focus,[part="menu-list-link"]:hover,[part="menu-list-link"]:focus {background:{{ @Theme.colors("BLACK", 5) }};cursor:pointer;outline:none;}[part="menu-button-icon"],[part="menu-list-icon"]{display:block;width:1.5rem;height:1.5rem;fill:currentColor;}`;

    Neo.Component({
        tag: "action-menu",
        tpl: html,
        css: css,
    })({
        props: {
            csrf: null,
            scene: null,
            print: null,
            patch: null,
            clear: null,
            target: null,
        },
        state: {
            rtl: document.documentElement.dir === "rtl",
        },
        cycle: {
            mounted() {
                if (this.hasAttribute("csrf")) {
                    this.props.csrf = this.getAttribute("csrf");
                    this.removeAttribute("csrf");
                }

                if (this.hasAttribute("target")) {
                    this.props.target = this.getAttribute("target");
                    this.removeAttribute("target");
                }

                if (this.hasAttribute("scene")) {
                    this.props.scene = this.getAttribute("scene");
                    this.removeAttribute("scene");
                }

                if (this.hasAttribute("print")) {
                    this.props.print = this.getAttribute("print");
                    this.removeAttribute("print");
                }

                if (this.hasAttribute("patch")) {
                    this.props.patch = this.getAttribute("patch");
                    this.removeAttribute("patch");
                }

                if (this.hasAttribute("clear")) {
                    this.props.clear = this.getAttribute("clear");
                    this.removeAttribute("clear");
                }

                this.refs.dropdown.addEventListener("change:expand", this.rules.change);
                const wrapper = this.closest("[part=wrapper]");
                wrapper && wrapper.addEventListener("scroll", this.rules.scroll);
            },
            removed() {
                this.refs.dropdown.removeEventListener("change:expand", this.rules.change);
                const wrapper = this.closest("[part=wrapper]");
                wrapper && wrapper.removeEventListener("scroll", this.rules.scroll);
            },
        },
        rules: {
            change(e) {
                const anchor = this.parentElement;
                if (e.detail.data) {
                    const { left, top } = anchor.getBoundingClientRect();
                    anchor.style.position = "";
                    this.style.top = `${Math.round(top)}px`;
                    this.style.left = `${Math.round(left)}px`;
                } else {
                    anchor.style.position = "relative";
                    this.style.top = "";
                    this.style.left = "";
                }
            },
            scroll(e) {
                this.refs.dropdown.expand = false;
            },
        },
    }).define();
})();

function TableVisualizer(dataVisualizer, callback, routes, rowClick, colClick) {
    var timer;
    const _routes = {
        ...$routes,
        ...routes,
    };
    const Links = document.createElement("div");
    Links.innerHTML = `<a id="prev" slot="end" aria-label="prev_page_link" class="flex w-8 h-8 items-center justify-center text-x-black outline-none rounded-x-thin !bg-opacity-5 hover:bg-x-black focus:bg-x-black focus-within:bg-x-black"><svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960"><path d="M452-219 190-481l262-262 64 64-199 198 199 197-64 65Zm257 0L447-481l262-262 63 64-198 198 198 197-63 65Z" /></svg></a><a id="next" slot="end" aria-label="next_page_link" class="flex w-8 h-8 items-center justify-center text-x-black outline-none rounded-x-thin !bg-opacity-5 hover:bg-x-black focus:bg-x-black focus-within:bg-x-black"><svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960"><path d="M388-481 190-679l64-64 262 262-262 262-64-65 198-197Zm257 0L447-679l63-64 262 262-262 262-63-65 198-197Z" /></svg></a>`;

    async function event(e) {
        e.preventDefault();
        dataVisualizer.loading = true;
        dataVisualizer.setProps({
            rows: await getData(e.target.href, createLinks),
            loading: false,
        });
    }

    function createLinks(prev, next, str) {
        const search = "?search" + (str ? "=" + str : "");
        const preva = $query("#prev", dataVisualizer);
        const nexta = $query("#next", dataVisualizer);
        if (prev) {
            const href = $routes.search + search + "&cursor=" + prev;
            if (preva) preva.href = href;
            else {
                const _preva = $query("#prev", Links).cloneNode(true);
                _preva.addEventListener("click", event);
                if (nexta) nexta.insertAdjacentElement("beforebegin", _preva);
                else dataVisualizer.insertAdjacentElement("afterbegin", _preva);
                _preva.title = $trans("Prev");
                _preva.href = href;
            }
        } else {
            if (preva) {
                preva.removeEventListener("click", event);
                preva.remove();
            }
        }
        if (next) {
            const href = $routes.search + search + "&cursor=" + next;
            if (nexta) nexta.href = href;
            else {
                const _nexta = $query("#next", Links).cloneNode(true);
                _nexta.addEventListener("click", event);
                if (preva) preva.insertAdjacentElement("afterend", _nexta);
                else dataVisualizer.insertAdjacentElement("afterbegin", _nexta);
                _nexta.title = $trans("Next");
                _nexta.href = href;
            }
        } else {
            if (nexta) {
                nexta.removeEventListener("click", event);
                nexta.remove();
            }
        }
    }

    if (rowClick instanceof Function) dataVisualizer.rowClick = rowClick;
    if (colClick instanceof Function) dataVisualizer.colClick = colClick;

    dataVisualizer.cols = callback(_routes);

    if (dataVisualizer.cols.find((e) => e.name === "actions")) {
        window.addEventListener("resize", () => {
            dataVisualizer.paint();
        });
        dataVisualizer.addEventListener("painted", (e) => {
            (dataVisualizer.refs.anchor || []).forEach((a, i) => {
                const { x, y } = a.getBoundingClientRect();
                const action = dataVisualizer.refs.action[i];
                action.style.left = x + "px";
                action.style.top = y + "px";
            });
        });
    }

    dataVisualizer.addEventListener("search", async(e) => {
        e.preventDefault();
        if (timer) clearTimeout(timer);
        dataVisualizer.loading = true;
        dataVisualizer.setProps({
            rows: await new Promise((resolver, rejecter) => {
                timer = setTimeout(async() => {
                    const data = await getData(_routes.search + "?search=" + encodeURIComponent(e.detail.data), createLinks);
                    resolver(data);
                }, 2000);
            }),
            loading: false,
        });
    });

    (async function() {
        dataVisualizer.loading = true;
        dataVisualizer.setProps({
            rows: await getData(_routes.search + window.location.search, createLinks),
            loading: false,
        });
    })();
}

function $trans(params) {
    return params
}

function reservationColumns({ csrf, scene, patch, print, clear, cols } = {}) {
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
    (!cols || cols.includes("action")) &&
        arr.push({
            name: "action",
            text: $trans("Actions"),
            headStyle: {width: 20, textAlign: "center"},
            bodyStyle: function (row) {
                return {...bgdate(row), width: 20, textAlign: "center"};
            },
            bodyPdfStyle: function (row) {
                return this.bodyStyle(row);
            },
            bodyRender: (row) => `<action-menu target="${row.id}"${str}></action-menu>`,
            headPdfStyle: function () {
                return this.headStyle;
            },
            bodyPdfRender: () => empty(),
            bodyCsvRender: () => empty(),
        });

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
                return this.headStyle
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
            bodyRender: (row) => row.vehicle ? ($capitalize($trans(row.vehicle.brand)) + " " + $capitalize($trans(row.vehicle.model)) + " " + row.vehicle.year + " (" + row.vehicle.registration_number + ")") : empty(),
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
                if(row.client) return `<div>${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}</div>` + (row.sclient ? `<div>${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)}</div>` : "");
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: (row) => {
                if(row.agency) return `${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}`;
                if(row.client) return `${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}` + (row.sclient ? `, ${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)}` : "");
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
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("total")) &&
        arr.push({
            name: "total",
            text: $trans("Total"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.total, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("paid")) &&
        arr.push({
            name: "paid",
            text: $trans("Payment"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.paid, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("rest")) &&
        arr.push({
            name: "rest",
            text: $trans("Creance"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.rest, 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("status")) &&
        arr.push({
            name: "status",
            text: $trans("Status"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $capitalize($trans(row.status)),
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("action")) &&
        arr.push({
            name: "action",
            text: $trans("Actions"),
            headStyle: {width: 20, textAlign: "center"},
            bodyStyle: {width: 20, textAlign: "center"},
            bodyRender: (row) => `<action-menu target="${row.id}"${str}></action-menu>`,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: () => empty(),
            bodyCsvRender: () => empty(),
        });

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
                return this.headStyle
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
            bodyRender: (row) => row.vehicle ? ($capitalize($trans(row.vehicle.brand)) + " " + $capitalize($trans(row.vehicle.model)) + " " + row.vehicle.year + " (" + row.vehicle.registration_number + ")") : empty(),
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
                if(row.client) return `<div>${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}</div>` + (row.sclient ? `<div>${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)}</div>` : "");
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: (row) => {
                if(row.agency) return `${$capitalize($trans("Agency"))}: ${$capitalize(row.agency.name)}`;
                if(row.client) return `${$capitalize($trans("Client"))}: ${row.client.last_name.toUpperCase() + " " + $capitalize(row.client.first_name)}` + (row.sclient ? `, ${$capitalize($trans("Secondary client"))}: ${row.sclient.last_name.toUpperCase() + " " + $capitalize(row.sclient.first_name)}` : "");
            },
        });
    (!cols || cols.includes("mileage")) &&
        arr.push({
            name: "mileage",
            text: $trans("Mileage"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => row.mileage + " " + $trans('Km'),
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("fuel_level")) &&
        arr.push({
            name: "fuel_level",
            text: $trans("Fuel level"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+row.fuel_level, 2) + " %",
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("penalties")) &&
        arr.push({
            name: "penalties",
            text: $trans("Penalties"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $money(+JSON.parse(row.penalties).reduce((a, e) => a + e.cost, 0), 2) + " " + $core.currency,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("status")) &&
        arr.push({
            name: "status",
            text: $trans("Status"),
            headStyle: {textAlign: "center"},
            bodyStyle: {textAlign: "center"},
            bodyRender: (row) => $capitalize($trans(row.status)),
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("action")) &&
        arr.push({
            name: "action",
            text: $trans("Actions"),
            headStyle: {width: 20, textAlign: "center"},
            bodyStyle: {width: 20, textAlign: "center"},
            bodyRender: (row) => `<action-menu target="${row.id}"${str}></action-menu>`,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: () => empty(),
            bodyCsvRender: () => empty(),
        });

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
            bodyRender: (row) => row.vehicle ? ($capitalize($trans(row.vehicle.brand)) + " " + $capitalize($trans(row.vehicle.model)) + " " + row.vehicle.year + " (" + row.vehicle.registration_number + ")") : empty(),
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
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: function (row) {return this.bodyRender(row);},
            bodyCsvRender: function (row) {return this.bodyRender(row);},
        });
    (!cols || cols.includes("details")) &&
        arr.push({
            name: "details",
            text: $trans("Details"),
            headStyle: {
                maxWidth: 300,
            },
            bodyStyle: function () {
                return this.headStyle
            },
            bodyRender: (row) => row.details ? row.details : empty(),
            bodyPdfRender: function (row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function (row) {
                return this.bodyRender(row);
            },
        });
    (!cols || cols.includes("action")) &&
        arr.push({
            name: "action",
            text: $trans("Actions"),
            headStyle: {width: 20, textAlign: "center"},
            bodyStyle: {width: 20, textAlign: "center"},
            bodyRender: (row) => `<action-menu target="${row.id}"${str}></action-menu>`,
            headPdfStyle: function () {
                return this.headStyle
            },
            bodyPdfStyle: function () {
                return this.bodyStyle;
            },
            bodyPdfRender: () => empty(),
            bodyCsvRender: () => empty(),
        });

    return arr;
}