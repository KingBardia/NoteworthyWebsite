import './App.css';
import BasicExample from './NavBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Noteworthy-at-ST-City-Hall.jpg';
import hireImage from './Noteworthy-at-ST-City-Hall.jpg'
import instagramGrid from './instagram-grid.png'
import eddie from './eddieimage.jpeg'
import ellington from './ellingtonimage.jpeg'
import athena from './athenaimage.jpg'
import CarouselMovie from './noteworthy-rec.mov'
import CardWithModal from './CardModal'

function App() {
  return (
    <div className='app-container'> 
      <BasicExample />
      <div className='homepage-content'> 
      </div>
      
      <div className='homepage-text'>
        <h1>Noteworthy Acapella</h1>
      </div>
      

      <section id="about" className="page-section">
        <div id='hire-us'> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hireImage} />
            <Card.Body>
              <Card.Text>
                We’re no stranger to weddings, private parties, tailgates, and conferences.
                We’ve performed at venues including San Francisco City Hall, University House, 
                the Faculty Club, and UC Berkeley’s 2022 Commencement.
              </Card.Text>
              <Button variant="primary">Hire Us</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div id='about-description'> 
          <h1>About Us</h1>
            <p>We’re a lower-voices A Capella group known for our fun performances and fresh takes on popular songs! 
            It always feels sunny when we perform, and not just because of our golden vests!
            Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, 
            released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</p>
        </div>
        
        <div id='follow-us'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={instagramGrid} />
            <Card.Body>
            <Card.Text>
              Make sure to connect with us on social media!
            </Card.Text>
            <Button variant="primary">Follow Us</Button>
            </Card.Body>
          </Card>
        </div>

        <div id='events'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100" // This makes the image block level and 100% width of the container
                src={ExampleCarouselImage}
                alt="First slide"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100" // This makes the image block level and 100% width of the container
                src={ExampleCarouselImage}
                alt="First slide"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
      
            <Carousel.Item>
              <img
                className="d-block w-100" // This makes the image block level and 100% width of the container
                src={ExampleCarouselImage}
                alt="First slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>



      <section id="fav-vids" className="page-section">
        <h1>Our Favorite Videos</h1>
        <Carousel>
          <Carousel.Item>
            <image
              className="d-block w-100" // This makes the image block level and 100% width of the container
              src={ExampleCarouselImage}
              alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
      
          <Carousel.Item>
            <img
              className="d-block w-100" // This makes the image block level and 100% width of the container
              src={ExampleCarouselImage}
              alt="First slide"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
      
          <Carousel.Item>
            <img
              className="d-block w-100" // This makes the image block level and 100% width of the container
              src={ExampleCarouselImage}
              alt="First slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
      </section>
        
      <section id="members" className="page-section">
        <h1>Our Members</h1>

        <div className='member-grid-container'> 
          <div id='eddie-card'> 
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={eddie} />
              <Card.Body>
                <Card.Title>Eddie</Card.Title>
                <Card.Text>
                  Co-Business Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div id='ellington-card'> 
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ellington} />
              <Card.Body>
                <Card.Title>Ellington</Card.Title>
                <Card.Text>
                  Co-Business Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div id='athena-card'> 
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={athena} />
              <Card.Body>
                <Card.Title>Athena</Card.Title>
                <Card.Text>
                  Co-Music Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
        
      </section>
    </div>
  );
}



export default App;
