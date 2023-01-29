import React from 'react';

export const Basics = () => {
  //----------------------------------------------
  let js = 'Fundamentals';

  if (js === 'js') {
    alert('Match');
  }

  console.log(40 + 20 + 30);
  //----------------------------------------------
  // Primitive data types
  let type_string = 'String';
  let type_number = 10;
  let type_boolean = true;
  let type_undefined = undefined;
  let type_null = null;
  let type_symbol = Symbol('UNIQUE VALUE');
  let type_bigInt = 999999999999999;

  console.log(typeof type_null); // bug

  console.log(
    type_string,
    type_number,
    type_boolean,
    type_undefined,
    type_null,
    type_symbol,
    type_bigInt
  );
  //----------------------------------------------
  // let Mark_weight = 78;
  // let John_weight = 92;
  // let Mark_height = 1.69;
  // let John_height = 1.95;
  let Mark_weight = 95;
  let John_weight = 85;
  let Mark_height = 1.88;
  let John_height = 1.76;

  const BMI = (w, h) => {
    return Math.round((w / h ** 2) * 100) / 100;
  };
  let Mark_BMI = BMI(Mark_weight, Mark_height);
  let John_BMI = BMI(John_weight, John_height);

  console.log(
    Mark_BMI > John_BMI
      ? `Mark has higher BMI ${Mark_BMI} than John ${John_BMI}`
      : `John has higher BMI ${John_BMI} than Mark ${Mark_BMI}`
  );
  //----------------------------------------------

  //----------------------------------------------
  //----------------------------------------------
  //----------------------------------------------
  return <div>Basics</div>;
};
