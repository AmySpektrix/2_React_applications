
const ClickListener = () => {
    const handleClick = (event) => {
        console.log(event);
    };
    return (
    <>
    <div className="componentHolder">
        <h2 className="componentTitle">ClickListener component</h2>
        <button onClick={handleClick}>Click Me!</button>
    </div>
    </>
    );
};

export default ClickListener;