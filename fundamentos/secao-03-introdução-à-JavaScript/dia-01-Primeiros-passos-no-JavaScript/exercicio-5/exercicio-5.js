const chessPiece = 'TOrre';

switch (chessPiece.toLocaleLowerCase()) {
    case 'peão':
        console.log('Frente.');
        break;
    case 'torre':
        console.log('Vertical e horizontal.');
        break;
    case 'bispo':
        console.log('Diagonais.');
        break;
    default:
        console.log('Peça não encontrada!');
}