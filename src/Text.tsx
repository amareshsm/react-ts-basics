import React, { useState, useRef } from 'react'

interface Content {
    Title: string,
    subTitle: string,
}
interface Props {
    text?: string;
    cond?: boolean;
    int?: number,
    fn?: (hello: string) => string,
    content: Content;
}

// interface TextNode {
//     text: string
// }


export const Text: React.FC<Props> = ({ content }) => {

    //const [count, setCount] = useState<number | null | undefined>(5);

    const [string, setString] = useState<string>('')

    //const [ownType, setOwnType] = useState<TextNode>({ text: 'own type' })

    const inputRef = useRef<HTMLInputElement>(null);

    const divRef = useRef<HTMLDivElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setString(e.target.value)
    }

    return (<div ref={divRef}>
        <h1>{content.Title}</h1>
        <h2>{content.subTitle}</h2>
        <div className="simple-input">
            <label>Enter something :  </label>
            <input type="text" ref={inputRef} value={string} onChange={handleChange} />
            <div>{string}</div>
        </div>
    </div>)
}