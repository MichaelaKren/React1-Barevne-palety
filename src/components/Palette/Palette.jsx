import React from "react";
import './style.css';
import {SchemeColor} from "../SchemeColor/SchemeColor";

export const Palette = ({name, image, urlLink, author, colors, direction, description}) =>
    <div className = "palette">
        <div className = {direction === "vertical" ? "palette-scheme palette-scheme--vertical" : "palette-scheme palette-scheme--horizontal"}>
            <img className="scheme-image" src={image} alt={name}/>
            <div className="scheme-colors">
                {colors.map((color) => (
                    <SchemeColor
                        key={color}
                        color={color}/>
                ))}
            </div>
        </div>
        <div className="palette-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Photo by <a href={urlLink} target="_blank">{author}</a>.</p>
        </div>
    </div>