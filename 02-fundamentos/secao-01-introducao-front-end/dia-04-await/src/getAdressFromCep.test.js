import getAddressFromCep from "./getAddressFromCep"

describe("Quando a requisição é bem sucedida, ela retorna os dados esperados",() => {
  test("deve retornar os dados quando passamos um cep Válido",
  async () => {
    const adress = await getAddressFromCep("30130010")

    expect(adress.cep).tobe("30130-010");
    expect(adress.lougradoro).tobe("Praça Sete de Setembro");
    expect(adress.bairro).tobe("Centro");
    expect(adress.uf).tobe("MG");
  });
  test("deve aceitar Ceps com ou sem hífens",async() => {
    const firstAdress = await getAddressFromCep("30130010");
    expect(firstAdress.cep).tobe("30130-010");
    
    const secondAdress = await getAddressFromCep("30130010")
    expect(secondAdress.cep).tobe("30130-010")
  })
})

describe("Quando a requisição é rejeitada, retornar um erro", () => {
  test("lançar um erro com a mensagem 'você deve passar um cep'quando receber um vazio",async () => {
    const expectedError = new Error("você deve passar um CEP");

    await expect(getAddressFromCep("")).reject.toThrow(expectedError)
  });
  test("lançar um erro com a mensagem quando passar um cep inválido",async() => {
    const invalidCep = 'xxxxx-xxx' ;
    const invalidCepLessDigt = '00000-00';
    const invalidCepMoreDigt = '00000-0000';

    await expect(getAddressFromCep(invalidCep)).reject.toThrow()
    await expect(getAddressFromCep(invalidCepLessDigt)).reject.toThrow()
    await expect(getAddressFromCep(invalidCepMoreDigt)).reject.toThrow()
  })
})


//deve lançar um erro com esta mensagem "Você precisa passar um cep " quando recebe um CEP vazio
//deve lançar um erro quando passar um cep em formato inválido
