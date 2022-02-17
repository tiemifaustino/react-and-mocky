import { render, screen } from '@testing-library/react';
import App from '../App';
import responseAPI from './mocks'

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    //Fazer o mock do fetch aqui 
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI),
    })
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const rickEl = await screen.findByRole('heading', {level: 3, name: /Rick Sanchez/i});
    expect(rickEl).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    
  })

})
