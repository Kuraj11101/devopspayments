
export class TeamSize {

    getSizes() {
        return fetch('data/size.json').then(res => res.json())
            .then(d => d.data);
    }
}
