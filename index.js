import app from './app';
import { port } from './config';

app.listen(port, () => console.log(`Server is listening on port ${port}`));