import { Sudoku } from './sudoku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

$(document).ready(function() {
      $('#sudoku-form').submit(function(event) {
        event.preventDefault();

        var allBoxes = $(".eachBox");
        var allRowsArr = [];
        var allBoxesArr = [];
        allBoxes.forEach(function(eachBox, i) {
            if (i % 9 == 0 && i != 0) {
                allRowsArr.push(allBoxesArr);
                allBoxesArr = [];
                allBoxesArr.push(eachBox.val());
            }
            else {
                allBoxesArr.push(eachBox.val());
            }

        })
        });


    });