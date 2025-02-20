const subtract = (a: number, b: number) => {
    return a - b;
};

export default function ArrowFunctions() {
    const twoMinusone = subtract(2, 1);
    console.log(twoMinusone);
    return (
        <div id="wd-arrow-functions">
            <h4>New ES6 arrow functions</h4>
            twoMinusone = {twoMinusone}   <br />
            subtract(2, 1) = {subtract(2, 1)} <hr />
        </div>
    );
}
