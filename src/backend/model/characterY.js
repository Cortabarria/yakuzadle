export default class  Character {
    constructor(id, name, sex, affiliation, hair, eye, height, dob, first_game_appearance, karaoke) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._affiliation = affiliation;
        this._hair = hair;
        this._eye = eye;
        this._height = height;
        this._dob = dob;
        this._first_game_appearance = first_game_appearance;
        this._karaoke = karaoke;
    }

    // Getter for id
    get id() {
        return this._id;
    }

    // Setter for id
    set id(value) {
        this._id = value;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        this._name = value;
    }

    // Getter for sex
    get sex() {
        return this._sex;
    }

    // Setter for sex
    set sex(value) {
        this._sex = value;
    }

    // Getter for affiliation
    get affiliation() {
        return this._affiliation;
    }

    // Setter for affiliation
    set affiliation(value) {
        this._affiliation = value;
    }

    // Getter for hair
    get hair() {
        return this._hair;
    }

    // Setter for hair
    set hair(value) {
        this._hair = value;
    }

    // Getter for eye
    get eye() {
        return this._eye;
    }

    // Setter for eye
    set eye(value) {
        this._eye = value;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(value) {
        this._height = value;
    }

    // Getter for dob
    get dob() {
        return this._dob;
    }

    // Setter for dob
    set dob(value) {
        this._dob = value;
    }

    // Getter for first_game_appearance
    get first_game_appearance() {
        return this._first_game_appearance;
    }

    // Setter for first_game_appearance
    set first_game_appearance(value) {
        this._first_game_appearance = value;
    }

    // Getter for karaoke
    get karaoke() {
        return this._karaoke;
    }

    // Setter for karaoke
    set karaoke(value) {
        this._karaoke = value;
    }
}
