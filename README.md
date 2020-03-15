# try-loopback

## tl;dr

    npm install
    npm test
    npm build

## Database migrations

Auto-update / auto-migrate modes based on data model, however auto-update comes
with the warning "Auto-update will attempt to preserve data while updating the
schema in your target database, but this is not
guaranteed to be safe.".

- https://loopback.io/doc/en/lb4/Database-migrations.html

Now I can see this auto-migration happening locally, but I wouldn't trust that
approach in a production environment. I can't see a way with loopback to
generate migration scripts from model and then have tight control of the
migration generated.

