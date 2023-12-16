import LinearProgress from '@mui/joy/LinearProgress';

export default function Loader() {
    return (
        <LinearProgress
            determinate={false}
            size="lg"
            value={25}
            variant="solid"
            sx={
                {
                    width: 500,

                    '--LinearProgress-thickness': '10px',
                }

            }
    />
    )
}