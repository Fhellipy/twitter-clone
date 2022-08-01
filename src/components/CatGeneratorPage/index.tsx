import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InterfacePost } from '../../common/interfaces/InterfacePost';
import { InterfaceUser } from '../../common/interfaces/InterfaceUser';
import { Post } from '../Post';
import {
  Container,
  Banner,
  Wrapper,
  AnchorIcon,
  ImageCat,
  WrapperButton,
  ButtonNewCat,
} from './styles';

function CatGeneratorPage() {
  const [catUrl, setCatUrl] = useState();
  const [reloadCounter, setReloadCounter] = useState(1);

  const urlApi = 'https://cataas.com';
  useEffect(() => {
    async function generatorNewCat(urlApi: any) {
      const response = await fetch(urlApi + '/cat?json=true');
      const json = await response.json();

      setCatUrl(json.url);
    }
    generatorNewCat(urlApi);
  }, [reloadCounter, urlApi]);

  return (
    <Container>
      <Banner>
        <Wrapper>
          <AnchorIcon />
          <span>Gerador de Gatinhos</span>
        </Wrapper>
        <ImageCat>
          <img
            data-cy="cat-image"
            src={`${urlApi}/${catUrl}`}
            alt="Imagem de um gato gerado aleatóriamente"
          />
        </ImageCat>
      </Banner>

      <WrapperButton>
        <ButtonNewCat
          data-cy="button-generator-cat"
          onClick={() => setReloadCounter((value) => value + 1)}
        >
          Buscar novo gatinho
        </ButtonNewCat>
        <span> Já geramos {reloadCounter} gatinhos hoje </span>
      </WrapperButton>
    </Container>
  );
}

export { CatGeneratorPage };
