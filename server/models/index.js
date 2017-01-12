/**
 * Created by vlad on 12.1.17.
 */
import UsersSchema from './userModel';
import config from '../config';


export default {[config.get('tables:users')]: UsersSchema}
