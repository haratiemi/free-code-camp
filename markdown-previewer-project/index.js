marked.SetOptions({
    breaks: true
    })

const renderer = new marked.Renderer();


function App() {
    const [text,setText] = React.useState("");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <textarea 
                name="text" 
                id="text" 
                rows="10" 
                value={text}
                onchange={(e) => setText(e.target.value)}
                className="text-area">
            </textarea>
            <h3 className="mt-3">Output</h3> 
           <Preview markdown={text}/>
           iv.root
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div
         dangerouslySetInnerHTML={{ __html: marked(markdown, {renderer: renderer}),
        }}
        id="preview"
        ></div>
    );
}


ReactDOM.render(<App />,document.getElementById('root'));