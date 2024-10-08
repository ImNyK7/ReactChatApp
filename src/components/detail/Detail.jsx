import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetal">

                            <img src="https://panels-cdn.imgix.net/content/a~hytha_24c75efd/a~hytha_24c75efd_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=avif&h=918&w=800&s=7133079dedd88167e56b59a07e8b10b5" alt="" />
                            <span>photo_07_08_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetal">

                            <img src="https://panels-cdn.imgix.net/content/a~hytha_24c75efd/a~hytha_24c75efd_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=avif&h=918&w=800&s=7133079dedd88167e56b59a07e8b10b5" alt="" />
                            <span>photo_07_08_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetal">

                            <img src="https://panels-cdn.imgix.net/content/a~hytha_24c75efd/a~hytha_24c75efd_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=avif&h=918&w=800&s=7133079dedd88167e56b59a07e8b10b5" alt="" />
                            <span>photo_07_08_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetal">

                            <img src="https://panels-cdn.imgix.net/content/a~hytha_24c75efd/a~hytha_24c75efd_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=avif&h=918&w=800&s=7133079dedd88167e56b59a07e8b10b5" alt="" />
                            <span>photo_07_08_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}

export default Detail