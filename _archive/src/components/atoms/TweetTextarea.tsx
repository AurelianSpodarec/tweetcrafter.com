import React, { useEffect } from 'react';


function TweetTextarea({text}:any) {

    useEffect(() => {
       
      }, [text]);

    const regex = /\B@\w+/g;
    const highlightedString = text.replace(regex, '<span class="text-blue-500">$&</span>');

    return (
        
        <p className="text-skin-base text-[23px]" style={{"lineHeight": "1.2em"}}>
            <div contentEditable dangerouslySetInnerHTML={{ __html: highlightedString }} />
        </p>
    )
}

export default TweetTextarea;