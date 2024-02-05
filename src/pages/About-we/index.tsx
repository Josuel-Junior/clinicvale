import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial"
import { ScrollRestoration } from "react-router-dom";

import aboutWeInitialSection from "../../assets/images/aboutWeInitialSection.png"
import { Box, Container, Typography } from "@mui/material"
import { Fade } from "react-awesome-reveal"

export const AboutWe: React.FC = () => {


    return (

        <Box>
            <ScrollRestoration />
            <LayoutSectionInitial background={aboutWeInitialSection} text="Conheça Nossa História" />

            <Container sx={{ my: "30px" }}>
                <Fade direction='up' triggerOnce>
                    <Typography component="h2" variant="h5" sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}>
                        Clinic Vale Laboratório de Análises Clínicas
                    </Typography>
                </Fade>
                <Typography paragraph>
                    Há treze anos, um compromisso incansável com a precisão e a qualidade na área de análises clínicas deu
                    origem à Clinic Vale. Estabelecida em Natércia, MG, nossa matriz é o ponto central de uma história marcada por
                    inovação, dedicação e um profundo comprometimento com a saúde de nossa comunidade.
                </Typography>
                <Typography paragraph>
                    Guiados pelo Dr. Welton Rubens Filho, CRF: 22.257, nossa equipe de profissionais especializados
                    eleva os padrões da análise clínica, garantindo resultados confiáveis e precisos. Sob sua liderança,
                    a Clinic Vale expandiu sua presença para além de Natércia, abrindo unidades de coleta em Lambari, São
                    Sebastião da Bela Vista, Conceição das Pedras e Heliodora.
                </Typography>
                <Typography paragraph>
                    Investimos constantemente em tecnologia de ponta, mantendo-nos na liderança da inovação no setor de análises
                    clínicas. Nossos equipamentos de última geração asseguram resultados rápidos e precisos, proporcionando uma base
                    sólida para diagnósticos confiáveis.
                </Typography>
                <Typography paragraph>
                    Acreditamos que a excelência no atendimento é tão crucial quanto a precisão técnica.
                    Na Clinic Vale, cada interação é uma oportunidade
                    para criar uma experiência de saúde positiva e acolhedora. Valorizamos cada paciente e buscamos
                    estabelecer um ambiente onde se sintam compreendidos e cuidados.
                </Typography>
                <Typography paragraph>
                    Ao longo de nossos 13 anos de atividade, consolidamos uma reputação de confiança e compromisso. Cada conquista,
                    cada desafio superado, moldou a identidade da Clinic Vale. Estamos orgulhosos de nossa jornada,
                    mas, mais importante ainda, estamos empolgados com o futuro.
                </Typography>
                <Typography paragraph>
                    Junte-se a nós nessa busca contínua pela excelência em saúde. Na
                    Clinic Vale, o compromisso com a precisão, a inovação e o bem-estar é mais do que uma missão; é a essência de quem somos.
                </Typography>

            </Container>
        </Box>

    )
}