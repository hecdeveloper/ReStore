import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Product } from '../../app/models/products';

interface Props {
    product: Product;
}


const ProductCard = ({ product }: Props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
            />
            <CardMedia
                sx={{ height: 140 }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5" component="div">
                    {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard