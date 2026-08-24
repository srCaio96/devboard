import React from "react";
// import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className="flex flex-col flex-wrap justify-center border bg-yellow-400">
            <ul className="flex flex-row flex-wrap justify-around bg-yellow-300">
                <li className="bg-yellow-200">Sobre mim</li>
                <li className="bg-yellow-200">Contato</li>
                <li className="bg-yellow-200">ajuda</li>
            </ul>

            <ul className="flex flex-row flex-wrap justify-center bg-yellow-300">
                <li className="p-5 bg-yellow-200">icone github</li>
                <li className="p-5 bg-yellow-200">icone instagram</li>
                <li className="p-5 bg-yellow-200">icone linkdin</li>
                <li className="p-5 bg-yellow-200">icone portifolio</li>
            </ul>

            <span className="bg-yellow-200 flex justify-center">Copyright</span>
        </footer>
    );
}