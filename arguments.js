function calc(...numbers) 
{
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log(result);
}
calc(1, 2, 3, 4, 5); 