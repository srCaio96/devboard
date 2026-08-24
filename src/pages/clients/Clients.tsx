import React from "react";
// import styles from "./Clients.module.css";

export default function Clients() {
    return (
        <section className="@container border">
            <article className="@container flex flex-row justify-around flex-wrap border">
                <div className="flex flex-col justify-center border">
                    <img src='' alt="" />Ícone

                    <span>Número</span>

                    <span>Request answered</span>
                </div>
                
                <div className="flex flex-col justify-center border">
                    <img src='' alt="" />Ícone

                    <span>Número</span>

                    <span>Request answered</span>
                </div>

                <div className="flex flex-col justify-center border">
                    <img src='' alt="" />Ícone

                    <span>Número</span>

                    <span>Request answered</span>
                </div>

                <div className="flex flex-col justify-center border">
                    <img src='' alt="" />Ícone

                    <span>Número</span>

                    <span>Request answered</span>
                </div>
            </article>

            <article className="@container flex flex-row justify-around border m-5">
                <div className="flex flex-col justify-center border">
                    <label htmlFor="">Total Request vs Request Answerd</label>
                    <img src='' alt="" />Gráfico
                </div>
                
                <div className="flex flex-col justify-center border">
                    <label htmlFor="">Média Query Time</label>
                    <img src='' alt="" />Gráfico
                </div>
            </article>
           
            <article className="@container flex flex-row justify-around border m-5">
                <div className="flex flex-col justify-center border">
                    <label htmlFor="">Customer Retention Rate</label>
                    <img src='' alt="" />Gráfico
                </div>
                
                <div className="flex flex-col justify-center border">
                    <label htmlFor="">Customer Satisfaction Rate</label>
                    <img src='' alt="" />Gráfico
                </div>
            </article>
           
           <article className="@container flex flex-col justify-start border m-5">
                <div>Customer Feedback</div>
           </article>
        </section>
    );
}