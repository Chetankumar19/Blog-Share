export const checkValidData =(email,userName,password,confirmPassword)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
    const isName = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/.test(userName);
    if(!isName)return "Name is not valid";
    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid)return "Password is not valid";
    if(password !== confirmPassword)return "Password doesn't match"
    return null;
}