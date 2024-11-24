import React, { useState, useRef , useCallback } from 'react';
import './Accordion.css';
import { VariableSizeList as List } from 'react-window';
import {} from "react-window";
function Accordion({ data }) {
    const [openIndices, setOpenIndices] = useState(() =>
      new Array(data.length).fill(false)
    );

    const rowHeights = useRef(new Array(data.length).fill(50)); // Default to 50px height
    const listRef = useRef(null);
  
    const toggleSection = (index) => {
      setOpenIndices((prev) => {
        console.log(prev)
        // Find the previously opened accordion index
        const prevIndex = prev.findIndex((isOpen) => isOpen);
    
        // Update row heights for both the currently toggled and the previously open rows
        rowHeights.current[prevIndex] = 50; // Collapse the previous row
        rowHeights.current[index] = prev[index] ? 50 : 150; // Toggle current row's height
    
        // Inform the list to recompute heights
        if (listRef.current) {
          listRef.current.resetAfterIndex(Math.min(prevIndex, index));
        }
    
        // Update the open indices state
        return prev.map((isOpen, i) => i === index ? !isOpen : false);
      });
    };

    const getItemSize = useCallback(
        (index) =>  rowHeights.current[index], // Return height for each row
        []
      );
  
    return (
        <List
          ref={listRef}
          height={500}
          itemCount={data.length}
          itemSize={getItemSize}
          width="100%"
          className="accordion-container"
        >
          {({ index, style }) => (
            <div style={style}>
              <AccordionItem
                key={index}
                isOpen={openIndices[index]}
                title={data[index].title}
                content={data[index].content}
                onToggle={() => toggleSection(index)}
              />
            </div>
          )}
        </List>
      );
  }
  
  

// Composition
const AccordionItem = React.memo(({ isOpen, title, content, onToggle }) => {
  const contentRef = useRef(null);

    return (
        <div className="accordion-item">
          <button
            onClick={onToggle}
            className="accordion-header"
            aria-expanded={isOpen}
          >
            {title}
          </button>
          {isOpen && (
            <div 
            ref={contentRef}
            className={`accordion-content ${isOpen ? "open" : ""}`}
            style={{
              maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
            }}
            
            >
              {content}
            </div>
          )}
        </div>
      );
    });
  
export default Accordion;



    /* old code
     <div className="accordionContainer">
      {accordionData.map((accordion, index) => (
        <AccordionItem
          key={index}
          isOpen={openIndex === index}
          title={accordion.title}
          content={accordion.content}
          onToggle={() => toggleSection(index)}
        />
      ))}
    </div> 
    */
    
