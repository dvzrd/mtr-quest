App.Ask = React.createClass({
    render() {
        return (
            <module className="ask module">
                <form className="ask question form">
                    <div className="input group">
                        <input type="text" className="question input"/>
                        <button type="submit" className="primary centered submit button">Ask</button>
                    </div>
                </form>
            </module>
        );
    }
});