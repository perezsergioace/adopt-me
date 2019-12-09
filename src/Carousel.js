import React from 'react';

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0
    };
    
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({ large }) => large);
        }

        return { photos };
    }

    handleIndexClick = (event) => {
        this.setState({
            // plus sign will turn a string into a number
            active: +event.target.dataset.index
        })
    }

	render() {
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
                        // do not do this. this is just for presentation
						<img
							key={photos}
                            onClick={this.handleIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? 'active' : ''}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;