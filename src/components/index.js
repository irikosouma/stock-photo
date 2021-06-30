import React, { useEffect, useState, useRef } from 'react'
//styles
import {Wrap} from './index.styles'
//images
import SearchIcon from '../assets/images/SearchIcon'
//components
export default function MainComponent() {
    const [list,setList] = useState([]);
    // const [listItems, setListItems] = useState(Array.from(Array(10).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false)
    const [defaultNumber, setDefaultNumber] = useState(1)
    const [inputState, setInputState] = useState("")
    const myInputRef = useRef(null);

    useEffect(() => {

        fetch(`https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${defaultNumber}`)
        .then(response => response.json())
        .then(json => {
            console.log('data', json)
            setList(json)
        })
        .catch(err => console.log('Error to get data', err))
    }, [])

    window.onscroll = function() {
        if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
            setIsFetching(true)
            fetchMoreListItems()
            }
        }
    function fetchMoreListItems() {
        setTimeout(() => {
            let localNumber = defaultNumber + 1
                setDefaultNumber(localNumber)
                if(inputState === ""){
                    fetch(`https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${localNumber}`)
                    .then(response => response.json())
                    .then(json => {
                        // setIsFetching(false)
                        let newList = [...list, ...json]
                        setList(newList)
                    })
                    .catch(err => console.log('Error to get data', err))
                }
                else {
                    fetch(`https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${localNumber}&query=${inputState}`)
                    .then(response => response.json())
                    .then(json => {
                        // setIsFetching(false)
                        let newList = [...list, ...json.results]
                        setList(newList)
                    })
                    .catch(err => console.log('Error to get data', err))
                }
        setIsFetching(false);
        }, 1000);
    }
    const handleChange = (e) => {
        let newVal = e.target.value;
        setInputState(newVal)
    }
    
    const handleSubmit = (e) => {
        let newVal = e.value
        let newApi = `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${defaultNumber}&query=${newVal}`
        fetch(`${newApi}`)
        .then(response => response.json())
        .then(json => {
            console.log('dataaa', json)
            setList(json.results)
        })
        .catch(err => console.log('error api', err));
    }
    return (
        <Wrap >
            <div className="bound-content" >
                <div className="wrap-search">
                    <div className="search">
                        <input ref={myInputRef} type="text" placeholder="search" value={inputState} onChange={handleChange}></input>
                        <button className="btn-search" type="submit" onClick={() => handleSubmit(myInputRef.current)}>
                            <SearchIcon className="icon-style" />
                        </button>
                    </div>
                </div>
                <div className="wrap-result" id="scrollContainer">
                    {list.map((item, index) => (
                        <div key={index}>
                            <div className="profile">
                                <img src={item.urls.small} alt="avatar-default" className="avatar" />
                                <div className="hover-image">
                                    <div className="wrap-name">
                                        <p>{item.user.name}</p>
                                        <p>{item.likes} likes</p>
                                    </div>
                                    <img src={item.user.profile_image.small} alt="avatar-small" className="small-avatar"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isFetching === true ? <p className="loading-page">Loading...</p> : ""}
                
            </div>
            
        </Wrap>
    )
}

