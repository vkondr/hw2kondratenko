import {Bars} from "react-loader-spinner";
import * as React from "react";

export default function LoadingIndicator() {

    return <div
        style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Bars type="ThreeDots" color="#2BAD60" height="100" width="100"/>
    </div>
}