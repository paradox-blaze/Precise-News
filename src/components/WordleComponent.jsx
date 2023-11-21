import React, { useEffect } from 'react'

import './wordle.css'

const WordleComponent = () => {
    useEffect(() => {
        var i = 1;
        var j = 1;

        var answer = "FOODS";

        var gameEnded = false;

        async function selectWordByDate() {
            const response = await fetch('//127.0.0.1:7256/getWordOfDay');
            return (await response.json()).word;
        }

        selectWordByDate().then((selectedWord) => {
            answer = selectedWord;
        });

        function getFrequency(word) {
            var frequency = {};


            for (let i = 0; i < 6; i++) {
                var letter = word[i];

                if (frequency[letter]) {
                    frequency[letter]++;
                }
                else {
                    frequency[letter] = 1;
                }
            }

            return frequency;
        }

        var animationInProgress = false;

        let wordSet;

        async function fetchAllWords() {
            const allWordsFromDB = await (await fetch('//127.0.0.1:7256/getAllWords')).json() // Fetch all words from the database
            const allWordsUpperCase = allWordsFromDB.map(entry => entry.word.toUpperCase());
            wordSet = new Set(allWordsUpperCase);
        }

        fetchAllWords()

        document.addEventListener('keydown', function (event) {
            if (animationInProgress === true || gameEnded === true) {
                return;
            }
            var box5 = document.querySelector('.row-' + j + ' .box5');


            if (event.key === 'Enter') {
                event.preventDefault();
            }

            var box = document.querySelector('.row-' + j + ' .box' + i);

            if (event.key.length === 1 && event.key.match(/[a-zA-Z]/) && i <= 5) {
                var a = event.key.toUpperCase();
                box.textContent = a;
                box.style.border = '2px solid #565758';
                i++;
            }

            if (event.key === 'Backspace' && i > 1) {
                i--;
                box = document.querySelector('.row-' + j + ' .box' + i);
                box.textContent = '';
                box.style.border = '2px solid #3a3a3c';
            }



            if (event.key === 'Enter' && i >= 5 && box5.textContent) {
                var doubleLetters = false;
                function getGuess() {
                    let guess = '';
                    for (let k = 1; k <= 5; k++) {
                        const boxContent = document.querySelector('.row-' + j + ' .box' + k).textContent;
                        if (boxContent) {
                            guess += boxContent;
                        }
                    }
                    return guess;
                }
                let guess = getGuess();

                console.log(guess);
                console.log(wordSet.has(guess));

                if (!wordSet.has(guess)) {
                    var wrongWord = document.querySelector('.wrongWord');
                    wrongWord.style.display = 'block';
                    wrongWord.style.animationPlayState = 'running';

                    setTimeout(function () {
                        wrongWord.classList.remove('slideDown');
                        wrongWord.style.display = 'none';
                    }, 1000)
                } else {
                    animationInProgress = true;

                    var answerFrequency = getFrequency(answer);

                    var box1 = document.querySelector('.row-' + j + ' .box1');
                    var box2 = document.querySelector('.row-' + j + ' .box2');
                    var box3 = document.querySelector('.row-' + j + ' .box3');
                    var box4 = document.querySelector('.row-' + j + ' .box4');


                    var button1 = document.querySelector('button[value="' + box1.textContent + '"]');
                    var button2 = document.querySelector('button[value="' + box2.textContent + '"]');
                    var button3 = document.querySelector('button[value="' + box3.textContent + '"]');
                    var button4 = document.querySelector('button[value="' + box4.textContent + '"]');
                    var button5 = document.querySelector('button[value="' + box5.textContent + '"]');

                    j++;
                    i = 1;

                    function handleBox(box, index, button) {


                        setTimeout(function () {

                            box.style.color = box.style.color === 'white' ? 'black' : 'white';

                            box.classList.add('flip');
                            if (answer.includes(box.textContent) && answer[index] === box.textContent) {
                                answerFrequency[box.textContent]--;
                                box.style.backgroundColor = "#538d4e";
                                box.style.border = "2px solid #538d4e";
                                button.style.backgroundColor = "#538d4e";
                                button.style.border = "2px solid #538d4e";
                            } else if (answer.includes(box.textContent)) {

                                if (answerFrequency[box.textContent] > 0) {
                                    box.style.backgroundColor = "#b59f3b";
                                    box.style.border = "2px solid #b59f3b";
                                    answerFrequency[box.textContent]--;
                                }
                                else {
                                    box.style.backgroundColor = "#3a3a3c";
                                    box.style.border = "2px solid #3a3a3c";
                                }
                                if (getComputedStyle(button).backgroundColor !== 'rgb(83, 141, 78)') {
                                    button.style.backgroundColor = "#b59f3b";
                                    button.style.border = "2px solid #b59f3b";
                                }
                            } else {
                                box.style.backgroundColor = "#3a3a3c";
                                box.style.border = "2px solid #3a3a3c";
                                button.style.backgroundColor = "#3a3a3c";
                                button.style.border = "2px solid #3a3a3c";
                            }
                        }, index * 500);
                    }


                    handleBox(box1, 0, button1);
                    handleBox(box2, 1, button2);
                    handleBox(box3, 2, button3);
                    handleBox(box4, 3, button4);
                    handleBox(box5, 4, button5);

                    setTimeout(function () {
                        animationInProgress = false;
                    }, 2500)
                    var row6box1 = document.querySelector('.row-6 .box1');
                    var row6box2 = document.querySelector('.row-6 .box2');
                    var row6box3 = document.querySelector('.row-6 .box3');
                    var row6box4 = document.querySelector('.row-6 .box4');
                    var row6box5 = document.querySelector('.row-6 .box5');


                    if (answer[0] == box1.textContent && answer[1] == box2.textContent && answer[2] == box3.textContent && answer[3] == box4.textContent && answer[4] == box5.textContent) {

                        setTimeout(function () {
                            gameEnded = true;
                            var victory = document.querySelector('.victory');
                            victory.style.display = 'block';
                            victory.style.animationPlayState = 'running';

                        }, 2500);

                        return;
                    }
                    else if (row6box1.textContent && row6box2.textContent && row6box3.textContent && row6box4.textContent && row6box5.textContent) {
                        setTimeout(function () {
                            gameEnded = true;
                            var loss = document.querySelector('.loss')
                            loss.style.display = 'block';
                            loss.style.animationPlayState = 'running';


                        }, 2500);
                        return;
                    }
                }
            }
        });
    }, []);

    function getLetter(buttonValue) {
        var event = new Event('keydown');
        event.key = buttonValue;
        document.dispatchEvent(event);
    };

    return (
        <div className='py-20 h-[100vh]'>
            <h1 className=' text-black dark:text-white wordleTitle'>Wordle</h1>
            <div className="messageContainer">
                <div className="wrongWord">Word not in the list!!</div>
                <div className="victory">Congratulations!!<br />You got the word right!</div>
                <div className="loss">Sorry..<br />You couldn't guess the word..</div>
            </div>

            <div className="container text-black dark:text-white">
                <div className="row-1">
                    <div className="box box1" tabIndex="0"></div>
                    <div className="box box2" tabIndex="1"></div>
                    <div className="box box3" tabIndex="2"></div>
                    <div className="box box4" tabIndex="3"></div>
                    <div className="box box5" tabIndex="4"></div>
                </div>

                <div className="row-2">
                    <div className="box box1" tabIndex="5"></div>
                    <div className="box box2" tabIndex="6"></div>
                    <div className="box box3" tabIndex="7"></div>
                    <div className="box box4" tabIndex="8"></div>
                    <div className="box box5" tabIndex="9"></div>
                </div>

                <div className="row-3">
                    <div className="box box1" tabIndex="10"></div>
                    <div className="box box2" tabIndex="11"></div>
                    <div className="box box3" tabIndex="12"></div>
                    <div className="box box4" tabIndex="13"></div>
                    <div className="box box5" tabIndex="14"></div>
                </div>


                <div className="row-4">
                    <div className="box box1" tabIndex="15"></div>
                    <div className="box box2" tabIndex="16"></div>
                    <div className="box box3" tabIndex="17"></div>
                    <div className="box box4" tabIndex="18"></div>
                    <div className="box box5" tabIndex="19"></div>
                </div>

                <div className="row-5">
                    <div className="box box1" tabIndex="20"></div>
                    <div className="box box2" tabIndex="21"></div>
                    <div className="box box3" tabIndex="22"></div>
                    <div className="box box4" tabIndex="23"></div>
                    <div className="box box5" tabIndex="24"></div>
                </div>

                <div className="row-6">
                    <div className="box box1" tabIndex="25"></div>
                    <div className="box box2" tabIndex="26"></div>
                    <div className="box box3" tabIndex="27"></div>
                    <div className="box box4" tabIndex="28"></div>
                    <div className="box box5" tabIndex="29"></div>
                </div>


            </div>

            <div className="keyboard">
                <div className="firstline">
                    <button value="Q" onClick={() => getLetter('Q')}>Q</button>
                    <button value="W" onClick={() => getLetter('W')}>W</button>
                    <button value="E" onClick={() => getLetter('E')}>E</button>
                    <button value="R" onClick={() => getLetter('R')}>R</button>
                    <button value="T" onClick={() => getLetter('T')}>T</button>
                    <button value="Y" onClick={() => getLetter('Y')}>Y</button>
                    <button value="U" onClick={() => getLetter('U')}>U</button>
                    <button value="I" onClick={() => getLetter('I')}>I</button>
                    <button value="O" onClick={() => getLetter('O')}>O</button>
                    <button value="P" onClick={() => getLetter('P')}>P</button>
                </div>

                <div className="secondline">
                    <button value="A" onClick={() => getLetter('A')}>A</button>
                    <button value="S" onClick={() => getLetter('S')}>S</button>
                    <button value="D" onClick={() => getLetter('D')}>D</button>
                    <button value="F" onClick={() => getLetter('F')}>F</button>
                    <button value="G" onClick={() => getLetter('G')}>G</button>
                    <button value="H" onClick={() => getLetter('H')}>H</button>
                    <button value="J" onClick={() => getLetter('J')}>J</button>
                    <button value="K" onClick={() => getLetter('K')}>K</button>
                    <button value="L" onClick={() => getLetter('L')}>L</button>
                </div>

                <div className="thirdline">
                    <button id="enter" value="Enter" onClick={() => getLetter('Enter')}>ENTER</button>
                    <button value="Z" onClick={() => getLetter('Z')}>Z</button>
                    <button value="X" onClick={() => getLetter('X')}>X</button>
                    <button value="C" onClick={() => getLetter('C')}>C</button>
                    <button value="V" onClick={() => getLetter('V')}>V</button>
                    <button value="B" onClick={() => getLetter('B')}>B</button>
                    <button value="N" onClick={() => getLetter('N')}>N</button>
                    <button value="M" onClick={() => getLetter('M')}>M</button>
                    <button id="back" value="Backspace" onClick={() => getLetter('Backspace')}>BACK</button>
                </div>
            </div>




        </div >
    )
}






export default WordleComponent
