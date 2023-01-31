import React from 'react';

export const Basics = () => {
  //----------------------------------------------
  // let js = 'Fundamentals';

  // if (js === 'js') {
  //   alert('Match');
  // }

  // console.log(40 + 20 + 30);
  //----------------------------------------------
  // Primitive data types
  // let type_string = 'String';
  // let type_number = 10;
  // let type_boolean = true;
  // let type_undefined = undefined;
  // let type_null = null;
  // let type_symbol = Symbol('UNIQUE VALUE');
  // let type_bigInt = 999999999999999;

  // console.log(typeof type_null); // bug

  // console.log(
  //   type_string,
  //   type_number,
  //   type_boolean,
  //   type_undefined,
  //   type_null,
  //   type_symbol,
  //   type_bigInt
  // );
  //----------------------------------------------
  // let Mark_weight = 78;
  // let John_weight = 92;
  // let Mark_height = 1.69;
  // let John_height = 1.95;
  // let Mark_weight = 95;
  // let John_weight = 85;
  // let Mark_height = 1.88;
  // let John_height = 1.76;

  // const BMI = (w, h) => {
  //   return Math.round((w / h ** 2) * 100) / 100;
  // };
  // let Mark_BMI = BMI(Mark_weight, Mark_height);
  // let John_BMI = BMI(John_weight, John_height);

  // console.log(
  //   Mark_BMI > John_BMI
  //     ? `Mark has higher BMI ${Mark_BMI} than John ${John_BMI}`
  //     : `John has higher BMI ${John_BMI} than Mark ${Mark_BMI}`
  // );
  //----------------------------------------------
  // let a_true = true;
  // let b_false = false;

  // console.log('---AND---');
  // console.log(a_true && b_false);
  // console.log(a_true && a_true);
  // console.log(b_false && b_false);
  // console.log('---OR---');
  // console.log(a_true || b_false);
  // console.log(a_true || a_true);
  // console.log(b_false || b_false);
  //----------------------------------------------
  // const teamA = [96, 108, 89];
  // const teamA = [97, 112, 101];
  // const teamA = [97, 112, 101];
  // const teamB = [88, 91, 110];
  // const teamB = [109, 95, 123];
  // const teamB = [109, 95, 106];

  // const scoreA = Math.round(teamA.reduce((a, b) => a + b, 0) / teamA.length);
  // const scoreB = Math.round(teamB.reduce((a, b) => a + b, 0) / teamB.length);

  // if (scoreA > scoreB && scoreA >= 100) {
  //   console.log(
  //     `Winner is team A with score ${scoreA}. Team B scored ${scoreB}`
  //   );
  // } else if (scoreA < scoreB && scoreB >= 100) {
  //   console.log(
  //     `Winner is team B with score ${scoreB}. Team A scored ${scoreA}`
  //   );
  // } else if (scoreA === scoreB && scoreA >= 100 && scoreB >= 100) {
  //   console.log(
  //     `Score is draw. Team A scored: ${scoreA}. Team B scored ${scoreB}`
  //   );
  // } else {
  //   console.log('Noone scored more than 100 pts.');
  // }
  //----------------------------------------------
  // const day = 'friday';

  // switch (day) {
  //   case 'monday':
  //     console.log('First day');
  //     break;
  //   case 'tuesday':
  //   case 'wednesday':
  //   case 'thursday':
  //   case 'friday':
  //     console.log('Work day');
  //     break;
  //   case 'saturday':
  //   case 'sunday':
  //     console.log('Weekend');
  //     break;
  //   default:
  //     console.log('No such day');
  // }
  //----------------------------------------------
  // const tip1 = 15;
  // const tip2 = 20;
  // const bill = 430;

  // bill > 50 && bill < 300
  //   ? console.log('bill ' + bill, '% ' + tip1, 'tip: ' + (bill * tip1) / 100)
  //   : console.log('bill ' + bill, '% ' + tip2, 'tip: ' + (bill * tip2) / 100);
  //----------------------------------------------
  // const calcAvg = (a, b, c) => (a + b + c) / 3;
  // const checkWinner = (team1, team2) => {
  //   if (team1 / 2 >= team2) {
  //     return console.log(`Team 1 wins with score ${team1} to ${team2}`);
  //   } else if (team2 / 2 >= team1) {
  //     return console.log(`Team 2 wins with score ${team2} to ${team1}`);
  //   }
  //   return console.log('Noone wins');
  // };

  // const team1 = Math.round(calcAvg(44, 23, 71));
  // const team2 = Math.round(calcAvg(65, 54, 49));
  // const team3 = Math.round(calcAvg(85, 54, 41));
  // const team4 = Math.round(calcAvg(23, 34, 27));

  // checkWinner(team1, team2);
  // checkWinner(team3, team4);
  //----------------------------------------------
  //----------------------------------------------
  return <div>Basics</div>;
};
