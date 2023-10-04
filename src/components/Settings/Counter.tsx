import { useState } from "react";
import { create } from "zustand";

type Store = {
    focus: number;
    long: number;
    short: number;
    pomodoros: number;
    inc: (payload: string) => void;
    decr: (payload: string) => void;
};

const useStore = create<Store>()((set) => ({
    focus: 0,
    long: 0,
    short: 0,
    pomodoros: 0,
    inc: (payload) => set((state: any) => ({ [payload]: state[payload] + 1 })),
    decr: (payload) =>
        set((state: any) => ({
            [payload]: state[payload] > 0 ? state[payload] - 1 : 0,
        })),
}));

const Counter = ({ status }: { status: string }) => {
    const [isStatus, setIsStatus] = useState("");
    const state: any = useStore();
    const countInc = () => {
        if (status === "focus") {
            state.inc("focus");
            setIsStatus("focus");
        } else if (status === "long") {
            state.inc("long");
            setIsStatus("long");
        } else if (status === "short") {
            state.inc("short");
            setIsStatus("short");
        } else if (status === "pomodoros") {
            state.inc("pomodoros");
            setIsStatus("pomodoros");
        }
    };
    const countDec = () => {
        if (status === "focus") {
            state.decr("focus");
            setIsStatus("focus");
        } else if (status === "long") {
            state.decr("long");
            setIsStatus("long");
        } else if (status === "short") {
            state.decr("short");
            setIsStatus("short");
        } else if (status === "pomodoros") {
            state.decr("pomodoros");
            setIsStatus("pomodoros");
        }
    };
    return (
        <div className="flex items-center justify-center">
            <button className="w-[66px] h-[40px] border-[#00000026] border-[1px] rounded-s-lg border-r-[0px]">
                <p className="text-[#14401D]">
                    {!state[isStatus] ? 0 : state[isStatus]}
                </p>
            </button>
            <div className="flex items-center justify-center flex-col relative">
                <button
                    onClick={countInc}
                    className="border-[#00000026] border-[1px] rounded-se-lg w-[30px] h-[20px] grid place-items-center border-b-[0px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        stroke="#14401D"
                        fill="#14401D"
                    >
                        <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                    </svg>
                </button>
                <div className="w-full h-[1px] bg-[#00000026] absolute"></div>
                <button
                    onClick={countDec}
                    className="border-[#00000026] border-[1px] rounded-ee-lg w-[30px] h-[20px] grid place-items-center border-t-[0px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        stroke="#14401D"
                        fill="#14401D"
                    >
                        <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Counter;
