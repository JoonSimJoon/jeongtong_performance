from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    body = models.TextField()
    images = models.ImageField(blank=True, upload_to="images", null=True)

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]


class GuestBook(models.Model):
    name = models.CharField(max_length=50)
    num = models.IntegerField(default =0)
    def __str__(self):
        return self.name
    def __int__(self):
        return self.num