import React from 'react';

class NotFound extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="App_page_404">
                <div className="wrap_content">
                    <h1 className="main_title">404 Not Found</h1>
                </div>
            </div>
        );
    }
}

export default NotFound;