import { useState } from "react";

type IconName =
  | "arrow"
  | "calendar"
  | "car"
  | "chevron"
  | "clock"
  | "locate"
  | "menu"
  | "pin"
  | "plus"
  | "route"
  | "shield"
  | "swap"
  | "user";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    car: <><path d="m5 11 2-5h10l2 5M4 11h16a1 1 0 0 1 1 1v5H3v-5a1 1 0 0 1 1-1ZM5 17v2M19 17v2" /><circle cx="7" cy="14" r=".5" fill="currentColor" /><circle cx="17" cy="14" r=".5" fill="currentColor" /></>,
    chevron: <path d="m9 7 5 5-5 5" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    locate: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    route: <><circle cx="6" cy="17" r="2" /><circle cx="18" cy="7" r="2" /><path d="M8 17h3a3 3 0 0 0 3-3v-4a3 3 0 0 1 3-3" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.9 8.2 7 10 4.1-1.8 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    swap: <><path d="m8 7 3-3 3 3M11 4v12M16 17l-3 3-3-3M13 20V8" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const rides = [
  { name: "City", detail: "3 min away", seats: 4, price: "$18.20", badge: "BEST VALUE" },
  { name: "Comfort", detail: "5 min away", seats: 4, price: "$24.60", badge: "TOP RATED" },
  { name: "XL", detail: "4 min away", seats: 6, price: "$31.40", badge: "" },
];

export default function App() {
  const [pickup, setPickup] = useState("Current location");
  const [destination, setDestination] = useState("Harbor Point, San Francisco");
  const [selectedRide, setSelectedRide] = useState(0);
  const [scheduled, setScheduled] = useState(false);
  const [booked, setBooked] = useState(false);

  const swapLocations = () => {
    setPickup(destination);
    setDestination(pickup);
  };

  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#171b1e]">
      <header className="flex h-20 items-center justify-between border-b border-black/10 bg-[#f4f2ed] px-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-[#2753d7] text-white">
            <Icon name="route" />
          </div>
          <span className="font-display text-2xl font-extrabold tracking-[-0.04em]">Rove</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
          <button className="border-b-2 border-[#2753d7] py-2">Book a ride</button>
          <button className="py-2 text-black/55 hover:text-black">My trips</button>
          <button className="py-2 text-black/55 hover:text-black">Business</button>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-black/15 px-5 py-2.5 text-sm font-bold transition hover:bg-white md:block">Help</button>
          <button className="grid size-10 place-items-center rounded-full bg-[#171b1e] text-white" aria-label="Open profile">
            <Icon name="user" className="size-4" />
          </button>
          <button className="grid size-10 place-items-center md:hidden" aria-label="Open menu"><Icon name="menu" /></button>
        </div>
      </header>

      <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(31rem,41%)_1fr]">
        <div className="relative z-10 flex flex-col justify-between bg-[#f4f2ed] px-5 py-8 shadow-[12px_0_40px_rgba(23,27,30,0.08)] sm:px-10 lg:px-14 lg:py-12">
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-8">
              <p className="mb-3 text-xs font-extrabold tracking-[0.18em] text-[#2753d7]">YOUR RIDE, YOUR WAY</p>
              <h1 className="font-display max-w-md text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Where can we take you?</h1>
            </div>

            <div className="rounded-[1.75rem] bg-white p-4 shadow-[0_20px_60px_rgba(23,27,30,0.09)] sm:p-6">
              <div className="relative">
                <div className="absolute bottom-9 left-[1.18rem] top-9 w-px bg-black/15" />
                <label className="relative mb-3 flex items-center gap-4 rounded-2xl bg-[#f4f2ed] px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#2753d7]/30">
                  <span className="size-2.5 shrink-0 rounded-full border-[3px] border-[#2753d7] bg-white" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.65rem] font-extrabold tracking-[0.14em] text-black/45">PICKUP</span>
                    <input value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full bg-transparent text-sm font-bold outline-none" aria-label="Pickup location" />
                  </span>
                  <Icon name="locate" className="size-5 text-[#2753d7]" />
                </label>
                <label className="relative flex items-center gap-4 rounded-2xl bg-[#f4f2ed] px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#2753d7]/30">
                  <span className="size-2.5 shrink-0 bg-[#ff6a3d]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.65rem] font-extrabold tracking-[0.14em] text-black/45">DESTINATION</span>
                    <input value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-transparent text-sm font-bold outline-none" aria-label="Destination" />
                  </span>
                  <button className="text-black/40 hover:text-black" aria-label="Add another stop"><Icon name="plus" className="size-5" /></button>
                </label>
                <button onClick={swapLocations} className="absolute right-11 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white shadow-sm hover:rotate-180 transition" aria-label="Swap locations">
                  <Icon name="swap" className="size-4" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button onClick={() => setScheduled(false)} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${!scheduled ? "bg-[#171b1e] text-white" : "border border-black/10 text-black/60"}`}>
                  <Icon name="clock" className="size-4" /> Leave now
                </button>
                <button onClick={() => setScheduled(true)} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${scheduled ? "bg-[#171b1e] text-white" : "border border-black/10 text-black/60"}`}>
                  <Icon name="calendar" className="size-4" /> Schedule
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-xl font-bold">Choose your ride</p>
                <button className="text-xs font-extrabold text-[#2753d7]">View all</button>
              </div>
              <div className="space-y-3">
                {rides.map((ride, index) => (
                  <button key={ride.name} onClick={() => setSelectedRide(index)} className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition sm:p-4 ${selectedRide === index ? "border-[#2753d7] bg-white shadow-[0_8px_25px_rgba(23,27,30,0.07)]" : "border-black/10 hover:bg-white/60"}`}>
                    <span className={`grid h-14 w-20 shrink-0 place-items-center rounded-xl ${selectedRide === index ? "bg-[#dce4ff] text-[#2753d7]" : "bg-black/5 text-black/55"}`}>
                      <Icon name="car" className="size-9" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="font-display font-extrabold">{ride.name}</span>
                        {ride.badge && <span className="rounded bg-[#e7f6d5] px-1.5 py-1 text-[0.55rem] font-black tracking-wider text-[#3d6417]">{ride.badge}</span>}
                      </span>
                      <span className="mt-1 flex items-center gap-2 text-xs font-medium text-black/50">{ride.detail}<span>•</span><Icon name="user" className="size-3" /> {ride.seats}</span>
                    </span>
                    <span className="font-display text-lg font-extrabold">{ride.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-xl">
            <button onClick={() => setBooked(true)} className="flex w-full items-center justify-between rounded-2xl bg-[#2753d7] px-6 py-4 font-bold text-white shadow-[0_12px_25px_rgba(39,83,215,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2148be]">
              <span>{booked ? "Ride requested" : `Book ${rides[selectedRide].name}`}</span>
              <span className="flex items-center gap-3">{booked ? "Finding your driver…" : rides[selectedRide].price}<Icon name={booked ? "locate" : "arrow"} className={booked ? "size-5 animate-spin" : "size-5"} /></span>
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-black/45"><Icon name="shield" className="size-4" /> Every ride includes Rove Safety Assist</div>
          </div>
        </div>

        <div className="map relative hidden min-h-[48rem] overflow-hidden lg:block">
          <div className="absolute left-[22%] top-[27%] z-10 flex items-center">
            <div className="grid size-12 place-items-center rounded-full border-4 border-white bg-[#2753d7] text-white shadow-xl"><Icon name="car" /></div>
            <div className="ml-2 rounded-xl bg-[#171b1e] px-3 py-2 text-xs font-bold text-white shadow-lg">3 min away</div>
          </div>
          <div className="absolute bottom-[25%] right-[21%] z-10 grid size-12 place-items-center rounded-full border-4 border-white bg-[#ff6a3d] text-white shadow-xl"><Icon name="pin" /></div>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M-40 240C140 250 140 395 300 420S470 330 840 340" className="map-road map-road-wide" />
            <path d="M220 -30C215 150 360 205 345 410S235 690 300 940" className="map-road map-road-wide" />
            <path d="M-20 650C180 610 260 710 430 680S610 560 830 610" className="map-road map-road-wide" />
            <path d="M80 -20C145 150 90 330 155 500S220 720 170 940M500 -20C500 210 570 280 550 470S485 720 600 940M-20 100C220 135 330 50 520 110S690 210 840 160" className="map-road map-road-small" />
            <path d="M190 310C270 300 333 350 344 424C356 506 480 562 607 676" fill="none" stroke="#2753d7" strokeWidth="8" strokeLinecap="round" strokeDasharray="1 15" />
          </svg>
          <div className="absolute right-6 top-6 flex flex-col gap-2">
            <button className="grid size-11 place-items-center rounded-xl bg-white shadow-lg" aria-label="Center map"><Icon name="locate" /></button>
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <button className="grid size-11 place-items-center border-b border-black/10 text-xl font-medium" aria-label="Zoom in">+</button>
              <button className="grid size-11 place-items-center text-xl font-medium" aria-label="Zoom out">−</button>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
              <p className="text-[0.65rem] font-black tracking-widest text-black/40">ESTIMATED TRIP</p>
              <div className="mt-1 flex items-center gap-3 font-display text-lg font-extrabold"><span>18 min</span><span className="size-1 rounded-full bg-black/25" /><span>7.4 mi</span></div>
            </div>
            <p className="rounded-lg bg-white/75 px-2 py-1 text-[0.6rem] font-bold text-black/45">Map data © Rove</p>
          </div>
        </div>
      </section>
    </main>
  );
}
