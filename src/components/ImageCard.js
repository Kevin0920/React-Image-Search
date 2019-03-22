import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current);
        this.imageRef.current.addEventListener('load', this.setSpans);
    };
    
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 250);

        this.setState = ({
            spans
        });
    };

    render() {
        
        const { description, urls } = this.props.image;

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
                <p>
                    {description}
                </p>
            </div>
        );
    }
}

export default ImageCard;
