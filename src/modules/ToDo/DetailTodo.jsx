import React from "react";
import { useParams } from "react-router-dom";

export const DetailTodo = () => {
    const {idTodo} = useParams();
    return <p>TODO DETALLE: {idTodo}</p>
}