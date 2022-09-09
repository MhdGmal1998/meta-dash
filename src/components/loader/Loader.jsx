import { useState } from "react";
import {
    Audio,
    BallTriangle,
    Bars,
    Circles,
    Grid,
    Hearts,
    MutatingDots,
    Oval,
    Plane,
    RevolvingDot,
    Rings,
    TailSpin,
    Triangle,
    Watch
} from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { data } from "./Model.js";
import './loader.scss'


export function BarLoader() {
    return (
        // data.map((loader)=>(
        // ))

        <div className="loader">
            <Bars
                color="#8884d8"
                height={100}
                width={100}
            />
        </div>
    )
}

export function AudioLoader() {
    <div className="loader">
        <Audio
            color="#8884d8"

        />
    </div>
}

