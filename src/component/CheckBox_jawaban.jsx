import React, { Component } from "react";
import dbCheckbox from "../model/dbCekbox.json";
import "./CheckBox_jawaban.css";

export default class CheckBox_jawaban extends Component {
  render() {
    return (
      <div>
        <section className="jawaban_cekbox">
          {dbCheckbox.map((postCheckbox, index) => {
            return (
              <div className="cardCheckbox">
                <ul className="list-group">
                  <label htmlFor="">soal</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.soal}
                  </li>
                  <label htmlFor="">Jawab : A</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.A}
                  </li>
                  <label htmlFor="">Jawab : B</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.B}
                  </li>
                  <label htmlFor="">Jawab : C</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.C}
                  </li>
                  <label htmlFor="">Jawab : D</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.D}
                  </li>
                  <label htmlFor="">Kunci :</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.kunci[0]},{postCheckbox.kunci[1]},
                    {postCheckbox.kunci[2]}
                  </li>
                  <label htmlFor="">Score : </label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.score}
                  </li>
                </ul>
                <button>SUBMIT</button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
