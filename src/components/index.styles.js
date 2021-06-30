import styled from 'styled-components';
const Wrap = styled.div`
    @media only screen and (min-width: 50px) {
        color: #324D67;
        font-size: 30px;
        padding: 80px 0;
        width: 100vw;
        height: calc(100% - 160px);
        .bound-content {
            margin: 0 auto;
            width: 90vw;
            max-width: 1170px;
            text-align: center ;
            .search {
                color: #617D99;
                max-width: 620px;
                height: 57px;
                border-bottom: 3px solid #617d98;
                display: flex;
                align-items: center;
                justify-content: center;
                input[type=text]{
                    height: 57px;
                    font-size: 24px;
                    color: #324D67;
                    min-width: 0px;
                    border: none;
                    padding: 0 12px;
                    text-transform: capitalize;
                    /* border-bottom: 3px solid #617d98; */
                    ::placeholder {
                        color: #617D99;
                    }
                }
                .btn-search {
                    width: calc(620px - (516px + 24px));
                    height: 57px;
                    border: none;
                    appearance: none;
                    background: none;
                    
                    .icon-style {
                        fill: #617D99;
                        width: 24px;
                        height: 24px;                
                    }
                }
            }
            .wrap-result {
                padding-top: 5rem ;
                display: grid;
                grid-gap: 2rem;
                gap: 2rem;
                .profile {
                    height: 17.5rem;
                    position: relative;
                    overflow: hidden;
                    :hover {
                        .hover-image {
                            
                            transform : translateY(0%);
                            transition: all .3s linear;
                        }
                    }
                    .avatar {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                    }
                    .hover-image {
                        position: absolute;
                        width: calc(100% - 2rem);
                        bottom: 0;
                        left: 0;
                        transform : translateY(100%);
                        height: fit-content;
                        background: rgba(0, 0, 0,.4);
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        transition : all .3s linear;
                        padding: 1rem;
                        .wrap-name {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 16px;
                            line-height: 16px;
                            color: #fff;
                            p {
                                margin: 0;
                                padding: 0;
                            }
                            & :first-child {
                                font-weight: 700;
                                letter-spacing: 2px;
                                padding-bottom: 20px;
                            }
                        }
                        .small-avatar {
                            width: 2.5rem;
                            height: 2.5rem;
                            border-radius: 50%;
                        }
                    }
                }
            }
            .loading-page {
                font-size: 60px;
                font-weight: 700;
                width: 100% ;
                margin: 0;
                padding: 0;
                padding-top: 20px;
            }
        }

    }
    @media only screen and (min-width: 700px){
    color: #324D67;
    font-size: 30px;
    padding: 80px 0;
    width: 100vw;
    height: calc(100% - 160px);
    .bound-content {
        .search {
            color: #617D99;
            width: 620px;
            height: 57px;
            border-bottom: 3px solid #617d98;
        }
        input[type=text]{
            height: 57px;
            font-size: 24px;
            color: #324D67;
            width: 516px;
            border: none;
            padding: 0 12px;
            text-transform: capitalize;
            border-bottom: 3px solid #617d98;
            ::placeholder {
                color: #617D99;
            }
        }
        .btn-search {
            width: calc(620px - (516px + 24px));
            height: 57px;
            border: none;
            appearance: none;
            background: none;
            padding-bottom: 12px;
            .icon-style {
                fill: #617D99;
                width: 24px;
                height: 24px;                
            }
        }
        .wrap-result {
            padding-top: 5rem ;
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(368px,1fr));
            grid-gap: 2rem;
            gap: 2rem;
            .profile {
                height: 17.5rem;
                position: relative;
                overflow: hidden;
                :hover {
                    .hover-image {
                        
                        transform : translateY(0%);
                        transition: all .3s linear;
                    }
                }
                .avatar {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                }
                .hover-image {
                    position: absolute;
                    width: calc(100% - 2rem);
                    bottom: 0;
                    left: 0;
                    transform : translateY(100%);
                    height: fit-content;
                    background: rgba(0, 0, 0,.4);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition : all .3s linear;
                    padding: 1rem;
                    .wrap-name {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        font-size: 16px;
                        line-height: 16px;
                        color: #fff;
                        p {
                            margin: 0;
                            padding: 0;
                        }
                        & :first-child {
                            font-weight: 700;
                            letter-spacing: 2px;
                            padding-bottom: 20px;
                        }
                    }
                    .small-avatar {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 50%;
                    }
                }
            }
        }
        .loading-page {
            font-size: 60px;
            font-weight: 700;
            width: 100% ;
            margin: 0;
            padding: 0;
            padding-top: 20px;
        }
    }
    }
    @media only screen and (min-width: 435px){
        color: #324D67;
        font-size: 30px;
        padding: 80px 0;
        width: 100vw;
        height: calc(100% - 160px);
    .bound-content {
        
        .search {
            color: #617D99;
            width: 620px;
            height: 57px;
            border-bottom: 3px solid #617d98;
        }
        input[type=text]{
            height: 57px;
            font-size: 24px;
            color: #324D67;
            width: 516px;
            border: none;
            padding: 0 12px;
            text-transform: capitalize;
            border-bottom: 3px solid #617d98;
            ::placeholder {
                color: #617D99;
            }
        }
        .btn-search {
            width: calc(620px - (516px + 24px));
            height: 57px;
            border: none;
            appearance: none;
            background: none;
            padding-bottom: 12px;
            .icon-style {
                fill: #617D99;
                width: 24px;
                height: 24px;                
            }
        }
        
        .wrap-result {
            padding-top: 5rem ;
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(368px,1fr));
            grid-gap: 2rem;
            gap: 2rem;
            .profile {
                height: 17.5rem;
                position: relative;
                overflow: hidden;
                :hover {
                    .hover-image {
                        
                        transform : translateY(0%);
                        transition: all .3s linear;
                    }
                }
                .avatar {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                }
                .hover-image {
                    position: absolute;
                    width: calc(100% - 2rem);
                    bottom: 0;
                    left: 0;
                    transform : translateY(100%);
                    height: fit-content;
                    background: rgba(0, 0, 0,.4);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition : all .3s linear;
                    padding: 1rem;
                    .wrap-name {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        font-size: 16px;
                        line-height: 16px;
                        color: #fff;
                        p {
                            margin: 0;
                            padding: 0;
                        }
                        & :first-child {
                            font-weight: 700;
                            letter-spacing: 2px;
                            padding-bottom: 20px;
                        }
                    }
                    .small-avatar {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 50%;
                    }
                }
            }
        }
        .loading-page {
            font-size: 60px;
            font-weight: 700;
            width: 100% ;
            margin: 0;
            padding: 0;
            padding-top: 20px;
        }
    }
    }
`;
export {Wrap}