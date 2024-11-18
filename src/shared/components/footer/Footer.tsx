import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { infoAboutCompany } from "../../constants/texts";
import { useNavigate } from "react-router-dom";

interface IInfo {
  city: string;
  address: string;
  call: string;
  map: string;
  whatsapp: string;
}

export const Navbar: React.FC = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const styleBorderLeft = {
    borderTop: "1px solid #fff",
    paddingTop: "10px",
  };
  const styleBorderTop = {
    borderLeft: "1px solid #fff",
    paddingLeft: "10px",
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          background: "#FB8423",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "",
        }}
      >
        <Grid
          container
          maxWidth="lg"
          sx={{ background: "", width: "90%", my: "25px" }}
        >
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: "10px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              color="secondary"
            >
              Unidades de coleta
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "",
                alignItems: "start",
              }}
            >
              {infoAboutCompany.map((itemLaboratory: IInfo) => {
                return (
                  <Button
                    variant="text"
                    color="secondary"
                    key={itemLaboratory.city}
                    onClick={() => navigate("/units")}
                  >
                    {itemLaboratory.city}
                  </Button>
                );
              })}
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              py: "10px",
            }}
            style={isMatch ? styleBorderLeft : styleBorderTop}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Agendamentos
            </Typography>
            <Typography sx={{ color: "#fff", my: "5px" }}>
              Entre em contato conosco pelos números:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "",
                alignItems: "start",
              }}
            >
              <Button
                variant="text"
                color="secondary"
                size="medium"
                href={"tel:+553534561381"}
                sx={{ pl: "0px" }}
                target="_blank"
              >
                <PhoneAndroidIcon
                  fontSize="medium"
                  color="secondary"
                  sx={{ mx: "5px", fontSize: "1.7rem" }}
                />
                (35) 3456-1381
              </Button>
              <Button
                variant="text"
                color="secondary"
                size="medium"
                href={"https://wa.me/5535999267993"}
                sx={{ mt: "5px", pl: "0px" }}
                target="_blank"
              >
                <WhatsAppIcon
                  fontSize="medium"
                  color="secondary"
                  sx={{ mx: "5px", fontSize: "1.7rem" }}
                />
                (35) 99926-7993
              </Button>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              py: "10px",
            }}
            style={isMatch ? styleBorderLeft : styleBorderTop}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
            >
              SIGA-NOS
            </Typography>
            <Typography sx={{ color: "#fff", my: "5px" }}>
              Acesse nossas redes sociais e fique por dentro do nosso dia a dia.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                color="secondary"
                href={"https://www.instagram.com/laboratorioclinicvale/"}
                aria-label="Link que direciona para o instagram"
                target="_blank"
              >
                <InstagramIcon
                  color="secondary"
                  sx={{ mx: "5px", fontSize: "3rem" }}
                />
              </Button>
              <Button
                variant="text"
                color="secondary"
                href={"https://www.facebook.com/clinicvalelab/"}
                aria-label="Link que direciona para o Facebook"
                target="_blank"
              >
                <FacebookIcon
                  color="secondary"
                  sx={{ mx: "5px", fontSize: "3rem" }}
                />
              </Button>
            </Box>
          </Grid>
          <Grid
            md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "red",
            }}
          ></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#FB8423",
          textAlign: "center",
          borderTop: "solid 1px #fff",
        }}
      >
        <Typography
          paragraph
          sx={{
            m: "0",
            fontSize: {
              xs: ".9rem",
              sm: ".9rem",
              md: "1rem",
            },
          }}
          color="secondary"
        >
          © Copyright Laboratório Clinic Vale - Todos os direitos reservados. |
          Site desenvolvido por{" "}
          <Button
            variant="text"
            color="secondary"
            sx={{
              "&:hover": {
                color: "#c4c4c4",
              },
            }}
            href={"https://www.jfctecnologia.com"}
            target="_blank"
          >
            JFC Tecnologia
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};
