# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| ------ | -------------- | ----------------------------- |
| GET | `/` | Home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about a particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an existing place |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 page (matches any route not defined above) |


Your places should have a name (string), city (string), state (string), cuisines (string) and a pic (string).


Louis order:
router.get('/', (req, res) => {
router.post('/', (req, res) => {
router.get('/new', (req, res) => {
router.get('/:id', (req, res) => {
router.get('/:id/edit', (req, res) => {
router.delete('/:id', (req, res) => {
router.put('/:id', (req, res) => {