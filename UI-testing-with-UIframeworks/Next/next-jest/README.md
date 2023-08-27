## Design Testable React Components
**Most Testable React Componets are Pure Componets**

### These are Harder to test

1. Global Varibales : 

    - React componets should not access varibales from outside expect their props.

    - **Why ?** : Have to mantain global varibale state in same way for each test which is cumbersome


2. Context 
    - has the same problem as Global variables. When using need to make sure it's somthing you don't /won't need to test
3. UseEffect Hook
    - makes testing componets herder.(Not pure anymore)
    - **Why ?** : opens another door for rendered output to be changed outside props 

4. UseSate Hook
    - makes testing componets hadrer.(Not pure anymore)
    - **Why ?** : If componet has states, the rendered output not alone depended on props


## Transforming to Pure components
### Before

```jsx
const ParagraphCounter = ()=>{
    let [paras, setParas]= useState(0);

    useEffect(()=>{
        // * has DOM dependency is is un-testable
        setParas(document.querySelectorAll('p').length);
    }, []);

    return (
        <div>
            This page contains {paras} paragraphs.
        </div>
    );
}
```
### After
```jsx
// now a pure component
const ParagraphCount = ({count}) => 
    (<div>This page contains {count} paragraphs.</div>)
// removed direct dependency of DOM (now has be mocked)
const countParagraphs = ()=>document.querySelectorAll('p').length

const ParagraphCounter = ()=>{
    let [paras, setParas]= useState(0);

    useEffect(()=>{
        setParas(countParagraphs());
    }, []);

    return (
        <ParagraphCount count={paras}/>
    );
}
```

## What are we Testing in React
1. Rendering
2. User interactions

## Required Tools
1. javaScript runtime : node.js
2. javaScript Test runner : jest
3. Test assertion library : jest
4. DOM and HTML environment : jsDOM
5. UI Testing library : React Testing Library 
    - find elements
    - trigger events on elements

## React Testing Library
What it used for ?
1. find elements
2. trigger events on elements

### using React Testing Library

```js
import {render} from '@testing-library/react'
it('test case', ()=>
{
    // render the componet to a container which is append to DOM (evvironment like jsDOM)
    render(<Test />)
})
```

### cheetsheet
[link](https://testing-library.com/docs/react-testing-library/cheatsheet/)
