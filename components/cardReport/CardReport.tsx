import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Skeleton} from "@mui/material";

interface CardReportProps {
    title: string;
    text: string;
}

const CardReport = ({ title, text }: CardReportProps) => {

    const cargando = false;
    return (
        <>
            {cargando ? <Skeleton
                sx={{ bgcolor: 'grey.200' }}
                variant="rectangular"
                width={300}
                height={100}
                />
            : (
                <Card sx={{ minWidth: 100, maxWidth: 300 }}>
                    <CardContent sx={{height:'100%',display:'flex', flexDirection:'column'}}>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, flex:1 }}>
                            {title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default CardReport;
