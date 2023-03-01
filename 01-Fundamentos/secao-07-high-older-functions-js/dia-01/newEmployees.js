
    //Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar 
    //uma estrutura de dados que possua o formato { nomeCompleto, email } para representar 
    //a nova pessoa contratada. 
    //Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  }
  return employees;
};
const employeeGenerator = (fullName) =>{
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` }; 

};
