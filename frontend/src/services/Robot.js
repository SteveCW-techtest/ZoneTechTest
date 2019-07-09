class RobotService {
    constructor() {
        console.log('init');
    }

    // call the move API
    move() {
        return fetch('/move')
            .then((response) => {
                return response.json();
            });
    }

    // call the palce API with details of selected cell
    place(x, y, heading) {
        return fetch(
            '/place',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "x": x,
                    "y": y,
                    "direction": heading
                })
            }
        )
    }

    // get the ouput of the report API
    report() {
        return fetch('/report')
            .then((response) => {
                return response.json();;
            })
    }

    rotateLeft() {
        return fetch('/left')
            .then((response) => {
                return response.json();;
            })
    }

    rotateRight() {
        return fetch('/right')
            .then((response) => {
                return response.json();;
            })
    }
}

export default new RobotService();