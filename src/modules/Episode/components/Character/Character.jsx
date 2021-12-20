import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export function Character({ name, image, origin, species }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {species}
        </Typography>
        <Divider
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            marginBottom: 2,
          }}
        />
        <Typography gutterBottom variant="body2">
          Origin: {origin?.name ?? "unknown"}
        </Typography>
        <Typography variant="body2">
          Dimension: {origin?.dimension ?? "unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
}
