import { render, screen } from '@testing-library/react';
import App from '../App';
import  responseAPI  from './mocks'

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI)
    })
    
    render(<App/>)
  })

  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', () => {
    const h3El = screen.getAllByRole('heading', {level: 3});
    const phraseEl = screen.getByText('Rick Sanchez');
    expect(h3El && phraseEl).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    
  })

})
