import { Sudoku } from './sudoku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

$(document).ready(function() {
      $('#sudoku-form').submit(function(event) {
        event.preventDefault();
        
        $('.input').clickfunction() 
        var number = $('#number').val(); 
        var goal = $('#result').val();
        var output = Sudoku(board)
        output.forEach(function(element) {

        });
          $('#result').show()
        })
    });